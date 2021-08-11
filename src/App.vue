<!--
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-05-25 16:24:15
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-10 09:04:25
-->
<template>
  <div id="app">
     <div class="nav" v-show='navStatus'>
        <topNav @adminNav="_adminNav"></topNav>
    </div>
    <div style="height:100%">
    <el-row type="flex">
      <el-col :span=" adminNavStatus ? 3 : 0"  v-show="adminNavStatus">
          <adminNav class="nav_menu"></adminNav>
      </el-col>
      <transition name="content">
      <el-col :span="adminNavStatus ? 21 : 24">
        <div class="view_Content" :style="{paddingLeft:adminNavStatus ?'10px' : '0px',paddingTop:adminNavStatus ?'10px' : '0px'}" >
          <router-view/>
        </div>
      </el-col>
      </transition>
    </el-row>
    </div>
  </div>
</template>

<script>
import adminNav from '@/view/components/NavMenu'
import topNav from '@/view/components/top'
export default {
  name: 'App',
  components: {
    adminNav: adminNav,
    topNav
  },
  watch:{
    $route(to){
      if(to.path == '/'){
        this.adminNavStatus = false
        this.navStatus = false
      }else{
        this.adminNavStatus = true
        this.navStatus = true
      }
    }
  },
  created(){
    if(this.$route.path == '/'){
        this.adminNavStatus = false
        this.navStatus = false
    }else{
        this.adminNavStatus = true
        this.navStatus = true
    }
  },
  data () {
    return {
      // status
      adminNavStatus: true,
      navStatus:true,
      // data
    }
  },
  // created () {
  //   console.log(process.env)
  // },
  methods: {
    _adminNav () {
      this.adminNavStatus = !this.adminNavStatus
    }
  }
}
</script>
<style>
.Wd_Layout{
  margin-right: 10px  !important;
}
.btn:focus{
    box-shadow:none!important;   
}
input{  
	background:none;  
	outline:none;  
	border:none;
}
button{
    /*消除button的默认样式*/
    /*这种写法是对所有的button标签同时生效*/
    margin: 0px;
    padding: 0px;
    /*自定义边框*/
    border: 0px;
    /*消除默认点击蓝色边框效果*/
    outline: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f2f2f2;
}
</style>
<style lang='scss' scoped>
*{
  margin:0;
  padding: 0;
}
.nav_menu{
  background: red;
  height: 100%;
}
.view_Content{
  // padding-top: 10px;
  transform: .4s;
}
.content{
  background: #ffff;
  // overflow: hidden;
}

</style>
