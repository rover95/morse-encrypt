<template>
  <div class="page">
    <div class="ipt-box">
      <div class="ipt-row">
        <!-- <input class="ipt-cell" v-model="incodes"> -->
        <input class="ipt-cell" v-model="plaintext" placeholder="输入显示明文"/>
      </div>
      <div class="ipt-row">
        <!-- <input class="ipt-cell" v-model="incodes"> -->
        <textarea class="ipt-cell" v-model="incodes" placeholder="输入加密文本"></textarea>
        <button class="btn" @click="handleIncode">加密</button>
      </div>
      <br>
      <div class="ipt-row">
        <textarea id="output" class="ipt-cell" placeholder="粘贴密文" style="height:300px" v-model="willDecode"></textarea>
        <button class="btn" @click="handleDecode">解密</button>
      </div>
      <div id="string"></div>
      <div id="box" class="show-cell">{{outcodes}}</div>
    </div>
  </div>
</template>

<script>
import { incode, decode } from "../encrypt.js";

export default {
  name: "Index",
  data() {
    return {
      msg: "encrypt",
      incodes: "",
      willDecode:'',
      outcodes: ""
    };
  },
  created: function() {},
  methods: {
    handleIncode: function() {
      let code = incode(this.incodes, this.plaintext);
      this.outcodes = code;
      let html='';
      for(let i in code){
        setTimeout(() => {
           html +=code[i]
          this.outcodes =html
        }, 10*i);
       
      }
      console.log(code);
      document.getElementById("output").value = code;
      document.getElementById("string").innerHTML = code;
    },
    handleDecode: function() {
      let code = decode(this.willDecode);
      console.log(code);
      this.outcodes = code;
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
#string{
  padding: 15px;
  text-align: center;
  font-size: 20px;
}
.page{
  margin: 0 auto;
  width: 100vw;
  min-height: 100vh;
  max-width: 500px;
  background-color: #eee;
}
.ipt-cell{
  border: none;
  max-width: 250px;
  min-width: 250px;
  max-height: 300px;
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
  color: #fff;
  padding: 4px;
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
  padding-top: 10vh;
}
.show-cell{
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  max-width: 500px;
  word-break: break-all;
}
</style>
