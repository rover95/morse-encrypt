'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incodeByUnicode = incodeByUnicode;
exports.decodeByUnicode = decodeByUnicode;

var _encrypt = require('./encrypt');

var _morse = require('./morse');

/*
    @param {String} str 待加密文本
    @param {String} textBefore 前段明文
    @param {String} textAfter 后段明文
*/
function incodeByUnicode() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var textBefore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var textAfter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var unicodeArr = [];
  var unicodeStr = '';
  // unicode 转码
  for (var i = 0; i < str.length; i++) {
    unicodeArr.push(str.charCodeAt(i).toString(36));
  }
  unicodeStr = unicodeArr.join(_morse.unicodeSsplit) + _morse.unicodeSsplit;
  // 零宽转码
  var ciphertext = (0, _encrypt.incode)(unicodeStr);
  return textBefore + ciphertext + textAfter;
}
/*
  @param {String} str 待解密字符串
*/
function decodeByUnicode(str) {
  var plaintextArr = (0, _encrypt.decode)(str);
  var plaintext = '';
  var unicodeText = '';
  // 零宽逆转码
  plaintextArr.map(function (val) {
    if (val) {
      unicodeText += val;
    } else {
      unicodeText += _morse.unicodeSsplit;
    }
  });
  // unicode 逆转码
  unicodeText.split(_morse.unicodeSsplit).forEach(function (val) {
    if (!val || val.length === 0) {
      return;
    }
    var textNum = parseInt(val, 36);
    plaintext += String.fromCharCode(textNum);
  });
  return plaintext;
}