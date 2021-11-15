<!--
 * @Descripttion:侧边栏
 * @version:
 * @Author: Kail
 * @Date: 2021-07-02 15:13:44
 * @LastEditors: lvnini
 * @LastEditTime: 2021-11-08 17:42:03
-->
<template>
  <div class="content">
    <!-- <child-menu :dataList="list"></child-menu> -->
    <el-menu :unique-opened='true' :default-active="$route.path" :popper-append-to-body='true' :router="true">
      <label v-for='(item,index) in list' :key='index'>
        <el-submenu :index = item.index v-if='item.children'>
          <template slot='title'>
            <span>{{item.name}}</span>
          </template>
          <label>
            <child-menu :dataList  = item.children></child-menu>
          </label>
        </el-submenu>
        <el-menu-item v-else :index="item.index">
          <div>{{item.name}}</div>
        </el-menu-item>
      </label>
    </el-menu>
  </div>
</template>
<script>
  import childMenu from './childMenu.vue'
  export default {
    components: {
      childMenu
    },
    data () {
      return {
        list: [
          { name: '主页',index: '/index'},
          {name: '邮件管理', index: '/email'},
          {name: '用户信息管理',  index: '/user'},
          {name: '工具管理',
           index: 'null',
           children: [
             {name: '转化JSON',index: '/instrument/json'},
             {name: '上传图片',index: '/instrument/images'},
           ]
          },
          {
            name: '信息墙',index: '/niaobaiqang/live'
          }
        ],
        key: null,
      }
    },
    methods: {
      handleOpen (key, item) {
        console.log(key,item);
        if(item.children){
          if(!item.children.length == 0){
            console.log(item.status);
            if(item.status){
              this.key = null
              this.list[key].status = false
              return false
            }
            this.key = key
            this.list[key].status = true
          }else{
            this.key = key
            if(item.path){
              if(!this.$route.path == item.path){
                this.$router.push(item.path)
              }
            }
          }
        }else{
          this.key = key
          if(item.path){
            if(!this.$route.path == item.path){
              this.$router.push(item.path)
            }
          }
        }
      },
      instrumentOpen(key,item){
        if(item.children){
          if(!item.children.length == 0){
            console.log(item.status);
            if(item.status){
              this.key = null
              this.list[key].status = false
              return false
            }
            this.key = key
            this.list[key].status = true
          }else{
            this.key = key
            if(item.path){
              if(!this.$route.path == item.path){
                this.$router.push(item.path)
              }
            }
          }
        }else{
          this.key = key
          if(item.path){
            if(!this.$route.path == item.path){
              this.$router.push(item.path)
            }
          }
        }
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: height .3s ease-in-out, padding-top .3s ease-in-out,padding-bottom .3s ease-in-out
  }
  .fade-enter,.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    height: 0px;overflow: hidden; padding-top: 0px; padding-bottom: 0px;
  }
</style>
<style scoped>
.rotate{
  transition: .3s;
  transform: rotate(90deg);
}
.rotateed{
  transition: .3s;
  transform: rotate(0deg);
}
</style>
<style lang='scss' scoped>
.content{
  min-width:60px;
  .nav{
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 70px);
    height: 100%;
    .nav_title{
      font-size: 18px;
      text-align: left;
      padding: 0.6rem;
      font-weight:  600;
    }
    .nav_list{
    .nav_list_Layout{
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 16px;
      padding: 0.6rem;
    }
    .check{
      background: #f5f5f5;
      color:#2462a1 ;
    }
    .nav_list_Layout:hover{
      background: #f5f5f5;
      transition:background-color .4s;
    }
    .nav_list_icon{
      font-size: 18px;
      padding: 0.6rem;
    }
    .nav_list_content{
      font-size: 16px;
      padding: 0.6rem 0rem 0.6rem 0rem;
      line-height: 0px;
    }
    .nav_list_sign{
      margin-left: auto;
      margin-right: 1.3rem;
    }
    .nav_list_somMenu{
      width: 100%;
      .nav_list_icon{
        margin-left: 20px;
      }
      .nav_list_somMenu{
        .nav_list_icon{
        margin-left: 40px;
      }
      }
    }
    }

  }
}
label{
  width: 100%;
}
</style>
