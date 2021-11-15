<template>
  <div class="content" :style="{background:backgroudnColor}">
    <div class="colorChek" @mouseenter="enter(true)" :class="mouseestate ? 'colorChekhover' :'' ">
      <div class="block">
        <div class="loveColor item"><el-color-picker v-model="color" @change='hiddenChek'></el-color-picker ></div>
        <div class="backColor item"><el-color-picker v-model="backgroudnColor"></el-color-picker ></div>
      </div>
    </div>
    <div> 
    </div>
    <div v-html="svg"  class='live' :style="{width:width,height:height}"></div>
  </div>
</template>

<script>
  import { HANDIE_SVG_IMGER } from '@/utils/index.js'
  export default {
    data(){
      return{
        color: '#121211',
        backgroudnColor: '#7ccaae',
        width: '500px',
        height: '500px',
        mouseestate: false,
        scss: [{color: '#e39355'}],
        svg: HANDIE_SVG_IMGER('#121211')
      }
    },
    methods: {
      enter(index){
        this.mouseestate = index
      },
      hiddenChek(val){
        this.svg = HANDIE_SVG_IMGER(val)
        this.mouseestate = false
      }
    }
  }
</script>

<style lang="scss" scoped>
:root{
  --color:
}
.icon{
  path{
    fill: var(--color) ;
  }
}
.content{
  position: relative;
  overflow: hidden;
  transition: .3s linear;
}
.colorChek{
  position: absolute;
  right: -100px;
  height: 80px;
  width: 200px;
  top: 20px;
  background: #9f99cb;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  transition: .3s linear;
  .block{
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  .item{
    margin-left: 30px;
    margin-right: 10px;
  }
}
}
.colorChekhover{
  right: 0px !important;
}
.el-color-dropdown:hover .colorChek{
    right: 0;
}
.live{
  height:200px;
  width: 200px;
  border-radius: 50%;
  // filter:drop-shadow(20px 0 red);
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  fill:currentColor;
  color:blue ;
}

</style>