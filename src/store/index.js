/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-08-10 10:17:20
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-30 11:09:37
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
//挂载Vuex
Vue.use(Vuex)

//创建VueX对象

const store = new Vuex.Store({
  state: {
    name: 'helloVueX'
  },
  modules: {
    user
  }
})

export default store
