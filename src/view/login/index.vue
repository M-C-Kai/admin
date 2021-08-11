<!--
 * @Descripttion: 
 * @version: 
 * @Author: Kail
 * @Date: 2021-07-27 09:20:33
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-09 16:53:11
-->
<template>
  <div class="content" :style="{background:check?'#000000':'#ffffff'}">
    <div class="bg">
      <vue-particles
        v-show='check'
        color="#FFFFFF"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      >
      </vue-particles>
      <div class="bg2" v-if="!check">
        <div class="myCanvas" id="myCanvas">
          <div class="wave"></div>
        </div>
      </div>
    </div>
    <div class="login">
      <div class="login-icon">
        <i class="el-icon-user-solid"></i>
      </div>
      <div class="login-title">
        <span>Login Here</span>
      </div>
      <div class="login-input">
        <div><i class="el-icon-s-custom"></i><input v-model="userName"></div>
        <div><i class="el-icon-connection" style="margin-top:10px"></i><input v-model="userPsw"></div>
      </div>
      <div class="login-button">
        <button class="Button" @keyup.enter="login" @click ='login'>Login</button>
        <div class="forget"><span>忘记密码</span><span>注册用户</span></div>
      </div>
    </div>
    <div class="kaiguan" @click='check = !check'>
      <div class="switch">
    <input type="checkbox" name="toggle">
    <label for="toggle">
        <i class="bulb">
      <span class="bulb-center"></span>
      <span class="filament-1"></span>
      <span class="filament-2"></span>
      <span class="reflections">
        <span></span>
      </span>
      <span class="sparks">
        <i class="spark1"></i>
        <i class="spark2"></i>
        <i class="spark3"></i>
        <i class="spark4"></i>
        </span>
        </i>
    </label>
</div>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/login'
export default {
  data(){
    return{
      check:true,
      userName:'',
      userPsw:''
    }
  },
  methods:{
    login(){
      let data = {name:this.userName,psw:this.userPsw}
      login(data).then(res=>{
        if(res.data.state != 200){
          this.$notify.error({
          title: '登录失败',
          message: res.data.message,
          duration:1000,
        })
        }else{
          this.$router.push('/index')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/check.scss';
@import '@/css/wave.scss';
.content{
  height: 100vh;
  overflow: hidden;
  position: relative;
  .bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .login{
    width: 400px;
    height:400px;
    background: rgba($color: #ffff, $alpha: 0.9);
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 3px;
    .login-icon{
      font-size: 56px;
      padding: 40px;
      background: #1284df;
      border-radius: 50%;
      width: 110px;
      height: 110px;
      display: flex;
      color: white;
      justify-content: center;
      align-items: center;
      margin: -55px auto;
    }
    .login-title{
      margin-top: 70px;
      font-size: 24px;
    }
    .login-input{
      margin: 10px auto;
      div{
        position: relative;
        i{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          margin-top: 9px;
          margin-left: 10px;
          font-size: 18px;
          color: #999999;
        }
      }
      input{
        border-radius: 30px;
        border: 1px solid #999999;
        padding-left: 30px;
        width: 80%;
        margin-top: 20px;
        height: 40px;
        font-size: 14px;
        line-height: 15px;
      }
    }
    .login-button{
      // margin-top: 20px;
      .Button{
        display: block;
        width:70%;
        height: 40px;
        border-radius: 30px;
        background:#1284df;
        margin: 0 auto;
        margin-top: 40px;
        color: white;
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: 500;
      }
      .forget{
        padding: 20px;
        // text-align: left;
        color: #0198ff;
        font-size: 13px;
        text-align: right;
        span{
          cursor: pointer;
          margin-right: 25px;
        }
      }
    }
  }
  .kaiguan{
    position: absolute;
    top: 50px;
    right:30px;
  }
}
</style>
<style lang="scss" scoped>

</style>