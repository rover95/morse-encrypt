'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = exports.incode = undefined;

var _morse = require('./morse');

/* 
    @param {String} str 待加密文本
    @param {String} textBefore 前段明文
    @param {String} textAfter 后段明文
*/
function incode() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var textBefore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var textAfter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if (typeof str !== 'string' || str.length === 0) {
        return;
    }
    var res = [];
    var l = "&#8205;";
    var s = "&#8204;";
    var q = "&#8203;";
    for (var i in str) {
        var val = str[i];
        if (val === ' ') {
            res.push('-...-');
        } else if (val === '|') {
            res.push('.--..');
        } else if (!!parseInt(val) || parseInt(val) == 0) {
            res.push(_morse.numToMorse[str[i]]);
        } else {
            res.push(_morse.wordsToMorse[str[i]]);
        }
    }
    var encrypt = res.join("/");
    encrypt = encrypt.replace(/\//g, q);
    encrypt = encrypt.replace(/\./g, s);
    encrypt = encrypt.replace(/\-/g, l);
    return textBefore + encrypt + textAfter;
}
/* 
    @param {String} text 待解密字符串
*/
/* eslint-disable */
function decode(text) {
    if (typeof text !== 'string' || text.length === 0) {
        return;
    }
    var decode = [];
    text.match(/(\&\#8203\;|\&\#8204\;|\&\#8205\;|\u200B|\u200C|\u200D|\&zwnj\;|\&zwj\;)+/g).map(function (temp) {
        temp = temp.replace(/\&\#8203\;|\u200B/g, "|");
        temp = temp.replace(/\&\#8204\;|\u200C|\&zwnj\;/g, ".");
        temp = temp.replace(/\&\#8205\;|\u200D|\&zwj\;/g, "-");
        var arr = temp.split("|");
        for (var i in arr) {
            decode.push(_morse.decodeWords[arr[i]]);
        }
    });
    return decode;
}
exports.incode = incode;
exports.decode = decode;