/* eslint-disable */
const morseWords = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']

const morseNumber = ['-----','.----','..---','...--','....-','.....','-....','--...','---..','----.']

let wordsToMorse = {};
let morseToWords = {};

let morseToNum = {};

//a-z数组
let words = [];
for (let i = 10; i < 36; i++) {
  let j = i.toString(36);
  words.push(j);
}

//数字加密字典
let numToMorse = morseNumber;


//字母加密字典
for (let i in words) {
    wordsToMorse[words[i]] = morseWords[i];
}
//字母解密字典
for (let i in wordsToMorse) {
    morseToWords[wordsToMorse[i]] = i;
}
//数字解密字典
for (let i in morseNumber){
    morseToNum[morseNumber[i]]=i;
}
//合并字典
let decodeWords = Object.assign(morseToWords, morseToNum);
/* 附件字符 */
const unicodeSsplit = "|/|"; //unicode 分割符
decodeWords['-...-'] = ' ';
decodeWords[".--.-"] = "\\";
decodeWords[".--.."] = unicodeSsplit;
wordsToMorse["\\"] = ".--.-";
wordsToMorse[unicodeSsplit] = ".--..";


export { wordsToMorse, morseToWords, morseToNum, numToMorse, decodeWords, unicodeSsplit };