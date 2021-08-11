<!--
 * @Descripttion: 
 * @version: 
 * @Author: Kail
 * @Date: 2021-08-09 16:36:25
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-10 09:03:48
-->
<template>
  <div class="Wd_Layout">
      <template>
    <el-table
      :data="UserList"
      stripe
      style="width: 100%">
      <el-table-column align='center' label="用户ID" prop="_id"></el-table-column>
      <el-table-column align='center' label="用户昵称" prop="name"></el-table-column>
      <el-table-column align='center' label="手机号码" prop="phone"></el-table-column>
      <el-table-column align='center' label="用户年龄" prop="age"></el-table-column>
      <el-table-column align='center' label="用户性别" prop="sex"></el-table-column>
      <el-table-column align='center' label="注册日期" prop="date"></el-table-column>
      <el-table-column align='center' label="电子邮箱" prop="email"></el-table-column>
    </el-table>
  </template>
  </div>
</template>

<script>
import {getUserList} from '@/api/adminUi/user/index'
export default {
  data(){
    return{
      UserList:[]
    }
  },
  mounted(){
    getUserList().then(res=>{
      console.log(res)
      this.UserList = res.data.data
    })
  }
}
</script>

<style>

</style>