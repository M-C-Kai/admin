<!--
 * @Descripttion:侧边栏
 * @version:
 * @Author: Kail
 * @Date: 2021-07-02 15:13:44
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-30 10:44:21
-->
<template>
  <div class="content">
    <div class="nav">
      <div class="nav_title">
        <span>导航</span>
      </div>
      <div class="nav_list" v-for="(item,index) in list" :key="index"  @click="handleOpen(index,item)">
        <div class="nav_list_Layout" :class="index == key ? 'check' : ''" >
        <div class="nav_list_icon">
          <i class="el-icon-house"></i>
        </div>
        <div class="nav_list_content">
          {{item.name}}
        </div>
        <div class="nav_list_sign" >
          <i class="el-icon-arrow-right"  :class="item.status? 'rotate' : 'rotateed'" v-show="item.children.length"></i>
        </div>
        </div>
        <transition name="fade">
          <div class="nav_list_somMenu" v-if="item.children" v-show="item.status">
            <div class="nav_list" v-for="(items,index) in item.children" :key="index" @click.stop="instrumentOpen(index,items.path)">
              <div class="nav_list_Layout" :class="items.key == index ? 'check' : ''" @click="items.status = !items.status">
                <div class="nav_list_icon">
                  <i class="el-icon-house"></i>
                </div>
                <div class="nav_list_content">
                  {{items.name}}
                </div>
                <div class="nav_list_sign">
                  <i class="el-icon-arrow-right"  :class="items.status? 'rotate' : 'rotateed'" v-show="items.children"></i>
                </div>
                </div>
                <transition name="fade">
                  <div class="nav_list_somMenu" v-if="items.children" v-show="items.status">
                      <div class="nav_list" v-for="(itemss,indexss) in items.children" :key="indexss" @click="handleOpen(index,itemss.path)">
                        <div class="nav_list_Layout" :class="itemss.key == index ? 'check' : ''">
                          <div class="nav_list_icon">
                            <i class="el-icon-house"></i>
                          </div>
                          <div class="nav_list_content">
                            {{itemss.name}}
                          </div>
                          <div class="nav_list_sign">
                            <i class="el-icon-arrow-right" v-show="itemss.children"></i>
                          </div>
                          </div>
                          </div>
                      </div>
                </transition>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: '主页',
          children: [
            {name: '一级子菜单',
              children: [
                {name: '二级子菜单'}
              ],
              status: false},
            {name: '邮件管理', path: '/email'},
            {name: '一级子菜单'},
            {name: '一级子菜单'}],
          status: false},
        {name: '用户信息管理',children: [],path: '/user'},
        {name: '维护保养',children: []},
        {name: '宣誓管理',children: []},
        {name: '工具管理',
        children: [
           {name: '转化JSON',path: '/instrument/json'},
           {name: '上传图片',path: '/instrument/images'},
        ]
         }
      ],
      // status
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
    // position:fixed;
    height: 100%;
    // top: 0;
    // min-height: calc(100vh - 70px);
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
</style>
