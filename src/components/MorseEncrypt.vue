<template>
  <div class="page">
    <div class="page-title">
      基于零宽字符和摩斯电码的字符串隐藏加密，将密文转码为零宽字符隐藏插入明文中
    </div>
    <div class="ipt-box">
      <div class="ipt-row">
        <!-- <input class="ipt-cell" v-model="incodes"> -->
        <input class="ipt-cell" v-model="plaintext_before" placeholder="输入前段文本"/>
      </div>
      <div class="ipt-row">
        <!-- <input class="ipt-cell" v-model="incodes"> -->
        <input class="ipt-cell" v-model="incodes" placeholder="输入加密文本"/>
      </div>
      <div class="ipt-row">
        <input class="ipt-cell" v-model="plaintext_after" placeholder="输入后段文本"/>
        <button class="btn" @click="handleIncode">加密</button>
        
      </div>
      <br>
      <div class="ipt-row">
        <textarea class="ipt-cell" placeholder="粘贴密文" style="height:300px" v-model="willDecode"></textarea>
        <button class="btn" @click="handleDecode">解密</button>
      </div>
      <div id="string"></div>
      <div id="box" class="show-cell">{{outcodes}}</div>
    </div>
    <div class="footer-info">
      <div>Designed & Powerd by rovelast@gmail.com</div>
      <div>Copyright © 2018 Rovelast</div>
    </div>
  </div>
</template>

<script>
import { incode, decode } from "../utils/encrypt.js";

export default {
  name: "Index",
  data() {
    return {
      msg: "encrypt",
      plaintext_before:'',
      plaintext_after:'',
      incodes: "",
      willDecode:'',
      outcodes: ""
    };
  },
  created: function() {},
  methods: {
    handleIncode: function() {
      let code = incode(this.incodes, this.plaintext_before,this.plaintext_after);
      let html='';
      for(let i in code){
        setTimeout(() => {
           html +=code[i]
          this.outcodes =html
        }, 5*i);
      }
      console.log(code);
      document.getElementById("string").innerHTML = code;
    },
    handleDecode: function() {
      let code = decode(this.willDecode);
      this.outcodes = code.join('');
    },
    copyCodes: function(id){
      var node=document.getElementById(id);
      node.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.page-title{
  font-size: 18px;
  padding: 15px;
  text-align: center;
  color: #555;
}
.footer-info{
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  color: #999;
  text-align: center;
}
#string{
  position: relative;
  width: 90%;
  margin: 35px auto;
  margin-top: 60px;
  padding: 15px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
}
#string::before{
  content: '密文';
  font-size: 12px;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}
.show-cell{
  position: relative;
  width: 90%;
  padding: 15px;
  font-size: 12px;
  border: 1px solid #ccc;
  margin: 15px auto;
  box-sizing: border-box;
  max-width: 500px;
  word-break: break-all;
}
.show-cell::before{
  content: '明文';
  font-size: 12px;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}
.page{
  margin: 0 auto;
  width: 100vw;
  min-height: 100vh;
  max-width: 500px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #efefef;
}
.ipt-cell{
  border: none;
  max-width: 250px;
  min-width: 250px;
  max-height: 100px;
  min-height: 30px;
  width: 250px;
  padding: 5px 10px;
  border-radius: 4px;
  outline: none;
  background-color: #ddd;
  margin-bottom: 10px;  
}
.btn{
  border: none; 
  width: 100px;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  background-color: #3af;
}
.flex-center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ipt-row{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ipt-box{
  width: 100%;
  padding-top: 50px;
}

</style>
