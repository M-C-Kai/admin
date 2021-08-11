/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-05-25 16:24:15
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-09 16:51:53
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/adminUi/index'
import user from '@/view/adminUi/user/index'
import login from '@/view/login/index'

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
    }
  ]
})
