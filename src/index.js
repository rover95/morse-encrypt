import { incode, decode} from "./encrypt"

let t = incode('love', 'llll')

console.log(t);

let w = decode(t)

console.log(w);
function ddd() {
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

let app = `<div>
    <input type="text" id="ipt">
    <button onclick="${ddd}">加密</button>
    <br>
    <input type="text" id="show">
    <button onclick="ttt();">解密</button>
    <div id="box"></div>
</div>`

document.getElementById("app").innerHTML = app;
// document.getElementById("show").value = t;
// document.getElementById("box").innerHTML = t;
