/* eslint-disable */
import { wordsToMorse, morseToWords, morseToNum, numToMorse, decodeWords } from "./morse";

/* 
    @param {String} str 待加密文本
    @param {String} textBefore 前段明文
    @param {String} textAfter 后段明文
*/
function incode(str = '', textBefore = '', textAfter = '') {
    if(typeof str !== 'string' || str.length===0){
        return
    }
    let res = [];
    let l = "&#8205;";
    let s = "&#8204;";
    let q = "&#8203;";
    for (let i in str) {
        let val = str[i];
        if(val === ' '){
            res.push('-...-')
        } else if (!!parseInt(val) || parseInt(val) == 0) {
          res.push(numToMorse[str[i]]);
        } else {
          res.push(wordsToMorse[str[i]]);
        }
    } 
    let encrypt = res.join("/");
    encrypt = encrypt.replace(/\//g, q)
    encrypt = encrypt.replace(/\./g, s)
    encrypt = encrypt.replace(/\-/g, l)
    return textBefore + encrypt + textAfter;
}
/* 
    @param {String} text 待解密字符串
*/
function decode(text) {
    if (typeof text !== 'string' || text.length === 0) {
        return
    }
    let decode = [];
    text.match(/(\&\#8203\;|\&\#8204\;|\&\#8205\;|\u200B|\u200C|\u200D|\&zwnj\;|\&zwj\;)+/g).map(temp => {
        temp = temp.replace(/\&\#8203\;|\u200B/g, "/");
        temp = temp.replace(/\&\#8204\;|\u200C|\&zwnj\;/g, ".");
        temp = temp.replace(/\&\#8205\;|\u200D|\&zwj\;/g, "-");
        let arr = temp.split("/");
        for (let i in arr) {
            decode.push(decodeWords[arr[i]]);
        }
    })
    return decode;
}
export {incode,decode}