
let w = 'rovelast'
let o = []
for(let i in w){
    o.push(wordsToMorse[w[i]]);
}
let encrypt = o.join("/");

let l = "&#8205;";
let s = "&#8204;";
let q = "&#8203;";

encrypt = encrypt.replace(/\//g, q)
encrypt = encrypt.replace(/\./g, s)
encrypt = encrypt.replace(/\-/g, l)
encrypt += 'im here';

let decode = encrypt.match(/(\&\#8203\;|\&\#8204\;|\&\#8205\;)+/g)[0];
console.log(decode);
decode = decode.replace(/\&\#8203\;/g, "/");
decode = decode.replace(/\&\#8204\;/g, ".");
decode = decode.replace(/\&\#8205\;/g, "-");

let tep = decode.split('/')
let c = []
for(let i in tep){
    c.push(morseToWords[tep[i]]);
}

console.log(c);


document.getElementById("box").innerHTML = encrypt+'im here';