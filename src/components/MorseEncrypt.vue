<template>
  <div class="page">
    <div class="page-title">
      零宽字符隐藏加密
    </div>
    <!-- <div>
      使用零宽字符转码密文，插入到普通文本当中存储隐藏信息；
    </div> -->
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
      <div id="string" @click="copyCodes"></div>
      <div id="box" class="show-cell">{{outcodes}}</div>
    </div>
    <div class="footer-info">
      <div>Designed & Powerd by Rovelast</div>
      <div>项目地址<a href="https://github.com/rover95/morse-encrypt"  target="_blank">Github</a></div>
      <!-- <div>Copyright © 2018 Rovelast</div> -->
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
  created: function() {
   
  },
  methods: {
    handleIncode: function() {
      let ch_Z = this.incodes.match(/[\u4e00-\u9fa5]+/g)
      console.log(ch_Z);
      let incodes = this.incodes;
      if(ch_Z){
        incodes=incodes.replace(/[\u4e00-\u9fa5]/g,function(t){
          return '\\u' +parseInt(t.charCodeAt(0),10).toString(16)
        })
        console.log(incodes);
      }
      
      let code = incode(incodes, this.plaintext_before,this.plaintext_after);
      let html='';
      for(let i in code){
        setTimeout(() => {
           html +=code[i]
          this.outcodes =html
        }, 5*i);
      }
      document.getElementById("string").innerHTML = code;
    },
    handleDecode: function() {
      let code = decode(this.willDecode);
      let outcodes =  code.join('');
      console.log(code,outcodes);
      
      outcodes = outcodes.replace(/\\u[0-9a-z]{4}/g,(t)=>{
        
        return String.fromCharCode(parseInt(t.replace('\\u',''),16))
      })
      console.log(outcodes);
      
      this.outcodes = outcodes;
    },
    copyCodes: function(){
       function copyToClipboard(elementId) {
          // 创建元素用于复制
          var aux = document.createElement("input");
          // 获取复制内容
          var content = document.getElementById(elementId).innerHTML || document.getElementById(elementId).value;
          // 设置元素内容
          aux.setAttribute("value", content);
          // 将元素插入页面进行调用
          document.body.appendChild(aux);
          // 复制内容
          aux.select();
          // 将内容复制到剪贴板
          document.execCommand("copy");
          // 删除创建元素
          document.body.removeChild(aux);
          //提示
          alert("已复制到剪贴板");
      }
      copyToClipboard('string')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.page-title{
  position: relative;
  font-size: 18px;
  font-weight: 700;
  padding: 15px;
  text-align: center;
  color: #555;
}
/* .page-title:hover::before{
  content: 'asdasdqw';
  position: absolute;
  bottom: 0;
  background-color: #fff;
} */
.footer-info{
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 100%;
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
  position: relative;
  margin: 0 auto;
  width: 100vw;
  min-height: 100vh;
  max-width: 500px;
  padding-bottom: 50px;
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
  padding-top: 20px;
}

</style>
