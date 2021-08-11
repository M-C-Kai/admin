<!--
 * @Descripttion:顶部导航栏
 * @version:
 * @Author: Kail
 * @Date: 2021-07-22 10:15:10
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-09 17:31:26
-->
<template>
  <div class="content">
    <div class="top-nav">
      <div class="logo">
        <span>WDTLoong Cloud</span>
      </div>
      <div class="sigon">
          <i class="el-icon-menu" @click="hiddenMenu"></i>
      </div>
      <div class="top-nav-sigon">
        <div class="newTips">
          <div>
          </div>
        </div>
        <div class="newTips"></div>
          <b-dropdown no-caret menu-class='_UserMenu'  variant='none' id="dropdown-1" text="Dropdown Button" class="m-md-2">
            <div slot="button-content">
              <div class="userInfo">
                <div class="userName">
                  userName
                </div>
                <div class="userImage">
                  <div class="imageLayout">
                        <el-image
                        style="width:50px; height: 50px"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="fill"
                        round>
                        </el-image>
                  </div>
                </div>
              </div>
            </div>
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hiddenMenu () {
      this.$emit('adminNav')
    }
  }
}
</script>
<style>
._UserMenu{
  margin-top: 10px !important;
  margin-left: -10px !important;
}
</style>
<style lang="scss" scoped>
  .content{
    .top-nav{
      width:100vw;
      display: flex;
      flex-direction: row;
      align-items: center;
      .logo{
        margin-left: 20px;
        text-align: center;
        line-height: 70px;
        font-size: 20px;
        font-weight: 700;
        color: #6d61ea;
        letter-spacing: 0.05em;
      }
      .sigon{
        margin-left: 35px;
        i{
        float: right;
        color: #ffff;
        background:#007bff;
        display: block;
        width: 30px;
        height: 25px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
      }
      }
      .top-nav-sigon{
        height: 100%;
        margin-left: auto;
        margin-right: 20px;
        .userInfo{
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          .userName{
            margin-right: 15px;
            font-size: 16px;
            color: #858796;
          }
          .userImage{
            width: 35px;
            height: 35px;
            overflow: hidden;
            border-radius: 50px;
            position: relative;
            .imageLayout{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
            }
          }
        }
      }
    }
  }
</style>
<style scoped>
.deltoggle{
  visibility: hidden;
  opacity: 0;
}
</style>
