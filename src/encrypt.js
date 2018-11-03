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
    let temp = text.match(/(\&\#8203\;|\&\#8204\;|\&\#8205\;|\u200B|\u200C|\u200D)+/g)[0];
    temp = temp.replace(/\&\#8203\;|\u200B/g, "/");
    temp = temp.replace(/\&\#8204\;|\u200C/g, ".");
    temp = temp.replace(/\&\#8205\;|\u200D/g, "-");

    let arr = temp.split("/");

    let decode = [];
    for (let i in arr) {
        decode.push(morseToWords[arr[i]]);
    }
    return decode;
}

let t = incode('love','llll')

console.log(t);

let w = decode(t)

console.log(w);
function ddd(){
    let ipt = document.getElementById("ipt").value;
    let code = incode(ipt, "w");
    console.log(code);
    document.getElementById("box").innerHTML = code;
    let t = document.getElementById("box").innerHTML
    document.getElementById("show").value = t;
    setTimeout(() => {
        document.getElementById("box").innerHTML = document.getElementById("show").value;
        
    }, 1000);
    
}
function ttt() {
    let ipt = document.getElementById("show").value;
    let code = decode(ipt);
    console.log(code);
    document.getElementById("box").innerHTML = code;
}

// document.getElementById("show").value = t;
// document.getElementById("box").innerHTML = t;