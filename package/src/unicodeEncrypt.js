import { incode, decode } from './encrypt';
import { unicodeSsplit } from "./morse";

/*
    @param {String} str 待加密文本
    @param {String} textBefore 前段明文
    @param {String} textAfter 后段明文
*/
export function incodeByUnicode (str = '', textBefore = '', textAfter = '') {
  const unicodeArr = [];
  let unicodeStr = '';
  // unicode 转码
  for (let i = 0; i < str.length; i++) {
    unicodeArr.push(str.charCodeAt(i).toString(36));
  }
  unicodeStr = unicodeArr.join(unicodeSsplit) + unicodeSsplit;
  // 零宽转码
  const ciphertext = incode(unicodeStr);
  return textBefore + ciphertext + textAfter;
}
/*
  @param {String} str 待解密字符串
*/
export function decodeByUnicode (str) {
  const plaintextArr = decode(str);
  let plaintext = '';
  let unicodeText = '';
  // 零宽逆转码
  plaintextArr.map(val => {
    if (val) {
      unicodeText += val;
    } else {
      unicodeText += unicodeSsplit;
    }
  });
  // unicode 逆转码
  unicodeText.split(unicodeSsplit).forEach(val => {
    if (!val || val.length === 0) {
      return;
    }
    let textNum = parseInt(val, 36);
    plaintext += String.fromCharCode(textNum);
  });
  return plaintext;
}
