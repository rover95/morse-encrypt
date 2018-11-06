<template>
  <div>
    <input v-model="incodes">
    <button @click="handleIncode">加密</button>
    <br>
    <input id="output" v-model="outcodes">
    <button @click="handleDecode">解密</button>
    <div id="box">{{outcodes}}</div>
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
<style scoped>
</style>
