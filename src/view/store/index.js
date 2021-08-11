/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-08-10 10:17:20
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-10 10:17:21
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})