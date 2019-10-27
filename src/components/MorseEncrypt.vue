<template>
  <div class="page">
    <div :class="showMessage?'message message-show':'message'">已复制到剪贴板</div>
    <div class="page-title">
      零宽字符隐藏加密
    </div>
    <!-- <div>
      使用零宽字符转码密文，插入到普通文本当中存储隐藏信息；
    </div> -->
    <div class="switch-box" @click="handleSwitchChange">
      <button :class="encryptType=='morse'?'switch-btn switch-active':'switch-btn'" id="morse">摩斯码</button>
      <button :class="encryptType=='unicode'?'switch-btn switch-active':'switch-btn'" id="unicode">Unicode码</button>
    </div>
    <div class="type-info">{{encryptType=='morse'?'支持小写英文+数字+中文':'支持全部字符'}}</div>
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
import { incodeByUnicode, decodeByUnicode } from "../utils/unicodeEncrypt.js";

export default {
  name: "Index",
  data() {
    return {
      msg: "encrypt",
      plaintext_before:'',
      plaintext_after:'',
      encryptType:'morse',
      showMessage:false,
      incodes: "",
      willDecode:'',
      outcodes: ""
    };
  },
  created: function() {
   incodeByUnicode()
  },
  methods: {
    handleSwitchChange(e){
      const {id} = e.target;
      if(!!id){
        this.encryptType = id      
      }
    },
    handleIncode: function() {
      let code = '';
      if(this.encryptType === 'morse'){
        let ch_Z = this.incodes.match(/[\u4e00-\u9fa5]+/g)
        let incodes = this.incodes;
        if(ch_Z){
          incodes=incodes.replace(/[\u4e00-\u9fa5]/g,function(t){
            return '\\u' +parseInt(t.charCodeAt(0),10).toString(16)
          })
        }
        
        code = incode(incodes, this.plaintext_before,this.plaintext_after);
        
      }else if(this.encryptType === 'unicode'){
        code = incodeByUnicode(this.incodes, this.plaintext_before,this.plaintext_after)
      }
      let html='';
      for(let i in code){
        setTimeout(() => {
          html +=code[i]
          this.outcodes =html
        }, 3*i);
      }
      document.getElementById("string").innerHTML = code;
    },
    handleDecode: function() {
      let outcodes = '';
      if(this.encryptType === 'morse'){
        let code = decode(this.willDecode);
        outcodes =  code.join('');
        outcodes = outcodes.replace(/\\u[0-9a-z]{4}/g,(t)=>{
          return String.fromCharCode(parseInt(t.replace('\\u',''),16))
        })
      }else if(this.encryptType === 'unicode'){
        outcodes = decodeByUnicode(this.willDecode);
      }
      this.outcodes = outcodes;
    },
    copyCodes: function(){
      this.copyToClipboard('string')
    },
    copyToClipboard(elementId) {
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
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
      // alert("已复制到剪贴板");
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
  text-align: center;
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
.switch-box{
  display: inline-block;
  justify-content: center;  
  margin: 30px auto 10px;
  width: auto;
  border: 1px solid #ccc;
  border-radius: 4px;  
  background-color: #fff;
  color: #999;
}
.switch-btn{
  padding: 5px 5px;
  text-align: center;
  font-size: 14px;
  width: 80px;
  outline: none;
  background-color: #fff;
  border: none;
}
.switch-active{
  background-color: rgb(252, 113, 58);
  color: #fff;
}
.type-info{
  margin: 10px auto;
  text-align: center;
  font-size: 12px;
  color: #aaa;
}
.message{
  position: fixed;
  top: -50px;
  left: 50%;
  padding: 10px 30px;
  background-color: #fff;
  border-radius: 6px;
  transform: translateX(-50%);
  transition: top 0.3s;
  z-index: 99;
}
.message-show{
  top: 50px;
}
</style>
