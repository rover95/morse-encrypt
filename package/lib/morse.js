'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable */
var morseWords = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];

var morseNumber = ['-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];

var wordsToMorse = {};
var morseToWords = {};

var morseToNum = {};

//a-z数组
var words = [];
for (var i = 10; i < 36; i++) {
    var j = i.toString(36);
    words.push(j);
}

//数字加密字典
var numToMorse = morseNumber;

//字母加密字典
for (var _i in words) {
    wordsToMorse[words[_i]] = morseWords[_i];
}
//字母解密字典
for (var _i2 in wordsToMorse) {
    morseToWords[wordsToMorse[_i2]] = _i2;
}
//数字解密字典
for (var _i3 in morseNumber) {
    morseToNum[morseNumber[_i3]] = _i3;
}
//合并字典
var decodeWords = Object.assign(morseToWords, morseToNum);
/* 附件字符 */
var unicodeSsplit = "|/|"; //unicode 分割符
decodeWords['-...-'] = ' ';
decodeWords[".--.-"] = "\\";
decodeWords[".--.."] = unicodeSsplit;
wordsToMorse["\\"] = ".--.-";
wordsToMorse[unicodeSsplit] = ".--..";

exports.wordsToMorse = wordsToMorse;
exports.morseToWords = morseToWords;
exports.morseToNum = morseToNum;
exports.numToMorse = numToMorse;
exports.decodeWords = decodeWords;
exports.unicodeSsplit = unicodeSsplit;