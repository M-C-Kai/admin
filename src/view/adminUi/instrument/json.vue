<!--
 * @Descripttion: JSON集成页面
 * @version: 
 * @Author: Kail
 * @Date: 2021-08-26 10:23:31
 * @LastEditors: lvnini
 * @LastEditTime: 2021-11-08 18:30:03
-->
<template>
  <div class="content">
  <el-input
  type="textarea"
  :rows="2"
  autosize
  placeholder="请输入内容"
  v-model="textarea"
  @input='Json'>
</el-input>
<div class="Json">
  <el-input
  type="textarea"
  :rows="2"
  autosize
  placeholder="Json内容"
  v-model="Jsontext">
</el-input>
</div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        textarea: '',
        Jsontext: ''
      }
    },
    methods: {
      Json(val){
        let arry = val.split("\n");
        let text = ''
        arry.forEach(item=>{
          text = text + '"'+item.split(':')[0]+'"'+':'+item.split(':')[1]+'\n'
        })
        text.length ? this.Jsontext = text : this.Jsontext = ''
      }
    }
  }
</script>

<style>
.content{
  
}
.Json{
  margin-top: 10vh;
}
</style>