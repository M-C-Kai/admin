/*
 * @Descripttion:路由配置页面
 * @version:
 * @Author: Kail
 * @Date: 2021-05-25 16:24:15
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-30 17:55:13
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import user from '@/view/adminUi/user/index'
import email from '@/view/adminUi/index/email'
import login from '@/view/login/index'
// import json from '@/view/adminUi/instrument/json'
import instrument from '@/router/children/instrument.js'
import Instrument from '@/view/adminUi/instrument/instrument'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/email',
      name: 'email',
      component: email
    },
    {
      path: '/instrument',
      name: 'instrument',
      component: Instrument,
      children: instrument
    }
  ]
})
