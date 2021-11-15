<!--
 * @Descripttion: 
 * @version: 
 * @Author: Kail
 * @Date: 2021-07-26 15:14:06
 * @LastEditors: lvnini
 * @LastEditTime: 2021-11-08 18:30:38
-->
<template>
  <div :class="ClassName" :id='id' :style="{width:width,height:height}"></div>
</template>

<script>
  export default {
    props: {
      id: {type: String,default: 'mychart'},
      ClassName: {type: String,default: 'mychart'},
      option: {type: Object,default: ()=>{return {}}},
      width: {type: String,default: 'mychart'},
      height: {type: String,default: 'mychart'}
    },
    data(){
      return{
        chart: null
      }
    },
    mounted(){
      this.initChart()
    },
    methods: {
      initChart(){
        let myChart = this.$echarts.init(document.getElementById(this.id))
        myChart.setOption(this.option)
      },
    }
  }

</script>

<style>

</style>