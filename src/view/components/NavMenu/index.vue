<!--
 * @Descripttion:侧边栏
 * @version:
 * @Author: Kail
 * @Date: 2021-07-02 15:13:44
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-09 18:16:48
-->
<template>
  <div class="content">
    <div class="nav">
      <div class="nav_title">
        <span>导航</span>
      </div>
      <div class="nav_list" v-for="(item,index) in list" :key="index"  @click="handleOpen(index,item.path)">
        <div class="nav_list_Layout" :class="key == index ? 'check' : ''" @click="item.status = !item.status">
        <div class="nav_list_icon">
          <i class="el-icon-house"></i>
        </div>
        <div class="nav_list_content">
          {{item.name}}
        </div>
        <div class="nav_list_sign" >
          <i class="el-icon-arrow-right"  :class="item.status? 'rotate' : 'rotateed'" v-show="item.children"></i>
        </div>
        </div>
        <transition name="fade">
          <div class="nav_list_somMenu" v-if="item.children" v-show="item.status">
            <div class="nav_list" v-for="(items,index) in item.children" :key="index">
              <div class="nav_list_Layout" @click="items.status = !items.status">
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
                      <div class="nav_list" v-for="(itemss,indexss) in items.children" :key="indexss">
                        <div class="nav_list_Layout">
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
            {name: '一级子菜单'},
            {name: '一级子菜单'},
            {name: '一级子菜单'}],
          status: false},
        {name: '用户信息管理',path:'/user'},
        {name: '维护保养'},
        {name: '宣誓管理'},
        {name: '工具管理'}
      ],
      // status
      key:0,
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      if(keyPath){
        this.key = key
        console.log(this.$route.path)
        if(this.$route.path == keyPath){
          return false
        }else{
          this.$router.push(keyPath)
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
