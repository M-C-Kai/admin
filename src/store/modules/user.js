/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-08-30 11:07:06
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-30 17:35:01
 */
import { login } from '@/api/login'
import cookie from "vue-cookies"
import {
  Message
} from 'element-ui'
const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: '',
    name: '',
    avatar: "",
    introduction: '',
    roles: [],
    menus: undefined,
    eleemnts: undefined,
    permissionMenus: undefined,
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    GetUserInfo({ commit }, userInfo) {
      // console.log(commit, userInfo);
      commit('SET_USER', userInfo)
    },
    Login({ commit }, form) {
      login(form).then(res => {
        if (res.data.state !== 200) {
          Message({
            message: res.data.message,
            type: 'warning'
          })
        } else {
          console.log('请求成功');
          cookie.set('token', res.data)
          commit('SET_TOKEN', res.data.data)
        }
      }).catch(() => {
        Message({
          message: '请求失败，请联系后端',
          type: 'error'
        })
      })
    }
    // GetToke({})
  }
}

export default user