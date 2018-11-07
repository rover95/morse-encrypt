<template>
  <div class="page">
    <div class="ipt-box">
      <div class="ipt-row">
        <input class="ipt-cell" v-model="incodes">
        <button class="btn" @click="handleIncode">加密</button>
      </div>
      <br>
      <div class="ipt-row">
        <input id="output" class="ipt-cell" v-model="outcodes">
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
      outcodes: ""
    };
  },
  created: function() {},
  methods: {
    handleIncode: function() {
      let code = incode(this.incodes, "w");
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
      let code = decode(this.outcodes);
      console.log(code);
      this.outcodes = code;
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
  height: 100vh;
  max-width: 500px;
  background-color: #eee;
}
.ipt-cell{
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  outline: none;
  background-color: #ddd;
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
  align-items: center;
  justify-content: center;
}
.ipt-box{
  width: 100%;
  padding-top: 30vh;
}
.show-cell{
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  max-width: 500px;
  word-break: break-all;
}
</style>
