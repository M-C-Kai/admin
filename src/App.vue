<!--
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-05-25 16:24:15
 * @LastEditors: lvnini
 * @LastEditTime: 2021-11-08 17:44:00
-->
<template>
  <div id="app">
     <div class="nav" v-show='navStatus'>
        <topNav @adminNav="_adminNav"></topNav>
    </div>
    <div style="height:100%">
    <el-row type="flex">
      <el-col :span=" adminNavStatus ? 3 : 0"  v-show="adminNavStatus">
        <adminMenu class="nav_menu"></adminMenu>
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
  import adminMenu from './view/components/global/menu/index.vue'
  import topNav from '@/view/components/top'
  import { mapState} from "vuex";
  import HIDDEN_PATH from '@/config/path.js'
  export default {
    name: 'App',
    components: {
      topNav,
      adminMenu
    },
    watch: {
      $route(to){
        HIDDEN_PATH.forEach(item=>{
          if(to.path == item.path){
            this.adminNavStatus = false
            this.navStatus = item.nav
          }else{
            this.adminNavStatus = true
            this.navStatus = true
          }
        })
      }
    },
    computed: {
    ...mapState({
      user: state=>state.user
    })
    },
    created(){
    
      // let token = this.$cookies.get('token')
      // if(token){

      // }

      this.$cookies.set('keyName','你的名字')
      console.log(this.$cookies.get('keyName')); 
      this.$store.dispatch("GetUserInfo","user").then(()=>{
        console.log('处理成功');
      }).catch(()=>{
        console.log('处理失败');
      })
      console.log(this.user);
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
        navStatus: true,
      // data
      }
    },
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
.content{
  width: 100%;
  height: 100%;
}
</style>
<style lang='scss' scoped>
*{
  margin:0;
  padding: 0;
}
.nav_menu{
  height: 100%;
  overflow:hidden;
}
.view_Content{
  transform: .4s;
  height: 100%;
  width: 100%;
}
.content{
  background: #ffff;
}
.el-col{
  min-height:calc(100vh - 70px);
}
</style>
