const morseWords = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']

const morseNumber = ['-----','.----','..---','...--','....-','.....',' -....',' --...','---..','----.']

let wordsToMorse = {};
let morseToWords = {};

let morseToNum = {};
let numToMorse = morseNumber;

let words=[];
for (let i = 10; i < 36; i++) {
    let j = i.toString(36)
    words.push(j);
}
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

console.log(wordsToMorse, morseToWords, morseToNum);
export { wordsToMorse, morseToWords, morseToNum, numToMorse };