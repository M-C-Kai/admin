<!--
 * @Descripttion: 邮件管理
 * @version: 
 * @Author: Kail
 * @Date: 2021-08-26 09:29:46
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-30 14:45:55
-->
<template>
    <div>
      <div class="top">
        <el-button class="button" @click="addEmail">添加邮件配置</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="标题"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="note"
          label="纪念节日"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="numberDay"
          label="已过天数"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="city"
          label="城市"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱地址"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button @click="updataEmail(scope.row)">编辑</el-button>
            <el-button @click="sendEmail(scope.row._id)">发送</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :visible.sync='dialogForm' >
        <el-form :model="form" label-width="70px" size='medium' label-position='left'>
          <el-form-item label="标题">
             <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="纪念节日">
             <el-input v-model="form.note"></el-input>
          </el-form-item>
          <el-form-item label="已过天数">
             <el-input v-model="form.numberDay"></el-input>
          </el-form-item>
          <el-form-item label="城市">
             <el-input v-model="form.city"></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址">
             <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item>
            <div>
              <el-button @click="updata">{{ formState?'保存':'修改'}}</el-button>
              <el-button @click="dialogForm = false">取消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
</template>


<script>
import {getEmail,updataEmail,send,addEmail} from '@/api/adminUi/index/email'
export default {
  data() {
    return {
      // data
      tableData: [],
      form: {},
      // status
      dialogForm: false,
      formState: false,
    }
  },
  async mounted(){
    let res = await getEmail()
    this.tableData = res.data.data
    console.log(this.tableData);
  },
  methods: {
    updataEmail(data){
      this.form = data
      this.dialogForm = true
      this.formState = false
    },
    async updata(){
      if(this.formState){
        let res = await addEmail(this.form)
        console.log(res.data.code);
        if(res.data.code == 200){
          this.dialogForm = false
            this.$notify({
            title: '成功',
            message: res.data.message,
            type: 'success',
            duration: 1000,
          })
        }else{
          this.$notify.error({
            title: '修改失败',
            message: res.data.message,
            duration: 1000,
          })
        }
        return false
      }
      let res = await updataEmail(this.form)
      console.log(res.data.code);
      if(res.data.code == 200){
        this.dialogForm = false
          this.$notify({
          title: '成功',
          message: res.data.message,
          type: 'success',
          duration: 1000,
        })
      }else{
        this.$notify.error({
          title: '修改失败',
          message: res.data.message,
          duration: 1000,
        })
      }
    },
    sendEmail(id){
      send({id: id}).then(res=>{
        if(res.data.code == 200){
          this.$notify({
            title: '成功',
            message: res.data.message,
            type: 'success',
            duration: 1000,
          })
        }else{
          this.$notify.error({
            title: '失败',
            message: res.data.message,
            duration: 1000,
          })
        }
      })
    },
    addEmail(){
      this.form = {}
      this.dialogForm = true
      this.formState = true
    },
  }
}
</script>

<style scoped>
.top{
  display: flex;
  padding: 5px;
}
.button{
  margin-left: auto;
  margin-right: 15px;
}
</style>