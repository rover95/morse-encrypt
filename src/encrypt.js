import { wordsToMorse, morseToWords, morseToNum, numToMorse, decodeWords } from "./morse";
function incode(str,textBefore,textAfter) {
    let res = [];
    let l = "&#8205;";
    let s = "&#8204;";
    let q = "&#8203;";
    for (let i in str) {
        let val = str[i];
        if (!!parseInt(val)) {
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
function decode(text) {
    let temp = text.match(/(\&\#8203\;|\&\#8204\;|\&\#8205\;|\u200B|\u200C|\u200D)+/g)[0];
    temp = temp.replace(/\&\#8203\;|\u200B/g, "/");
    temp = temp.replace(/\&\#8204\;|\u200C/g, ".");
    temp = temp.replace(/\&\#8205\;|\u200D/g, "-");

    let arr = temp.split("/");

    let decode = [];
    for (let i in arr) {
        decode.push(decodeWords[arr[i]]);
    }
    return decode;
}

export {incode,decode}