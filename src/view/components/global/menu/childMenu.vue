<!--
 * @Author: lvnini
 * @Date: 2021-11-05 18:15:14
 * @LastEditTime: 2021-11-08 17:41:54
 * @LastEditors: lvnini
 * @Description: 
 * @FilePath: \es-admin\src\view\components\global\menu\childMenu.vue
-->
<template>
  <div class="menu-tree">
    <label v-for="(item,index) in dataList" :key="index">
      <el-submenu :index="item.index" v-if="item.children">
        <template slot="title">
          <i class="el-icon-location" v-if="item.name"></i>
          <span>{{item.name}}</span>
        </template>
        <label>
          <child-menu :dataList="item.children"></child-menu>
        </label>
      </el-submenu>
      <el-menu-item v-else :index="item.index">
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </label>
  </div>
</template>
 
<script>
  export default {
    name: 'childMenu',
    props: ['dataList']
  }
</script>