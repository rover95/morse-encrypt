function incode(str,text) {
    let res = [];
    let l = "&#8205;";
    let s = "&#8204;";
    let q = "&#8203;";
    for (let i in str) {
        res.push(wordsToMorse[str[i]]);
    } 
    let encrypt = res.join("/");
    encrypt = encrypt.replace(/\//g, q)
    encrypt = encrypt.replace(/\./g, s)
    encrypt = encrypt.replace(/\-/g, l)
    return text + encrypt+text;
}
function decode(text) {
    let temp = text.match(/(\&\#8203\;|\&\#8204\;|\&\#8205\;)+/g)[0];
    temp = temp.replace(/\&\#8203\;/g, "/");
    temp = temp.replace(/\&\#8204\;/g, ".");
    temp = temp.replace(/\&\#8205\;/g, "-");

    let arr = temp.split("/");

    let decode = [];
    for (let i in arr) {
        decode.push(morseToWords[arr[i]]);
    }
    return decode;
}

let t = incode('love','空方')

console.log(t);

let w = decode(t)

console.log(w);
console.log("空方‌‍‌‌​‍‍‍​‌‌‌‍​‌空方‌‍‌‌​‍‍‍​‌‌‌‍​‌‌‍‌‌​‍‍‍​‌‌‌‍​‌");

function ddd(){
    let ipt = document.getElementById("ipt").value;
    let code = incode(ipt, "空方");
    console.log(code);
    document.getElementById("box").innerHTML = code;
}
function ttt() {
    let ipt = document.getElementById("show").value;
    let code = decode(ipt, "空方");
    console.log(code);
    document.getElementById("box").innerHTML = code;
}

document.getElementById("box").innerHTML = t;