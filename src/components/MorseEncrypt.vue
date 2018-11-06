<template>
  <div class="page">
    <div class="flex-center">
      <div>
        <input class="ipt-cell" v-model="incodes">
      <button class="btn" @click="handleIncode">加密</button>
      </div>
      <br>
      <div>
        <input id="output" class="ipt-cell" v-model="outcodes">
        <button class="btn" @click="handleDecode">解密</button>
        <div id="box">{{outcodes}}</div>
        
      </div>
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
      console.log(code);
      document.getElementById("output").value = code;
      document.getElementById("box").innerHTML = code;
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
.page{
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
