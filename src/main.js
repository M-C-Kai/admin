/*
 * @Descripttion: 
 * @version: 
 * @Author: Kail
 * @Date: 2021-07-23 16:45:55
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-09 15:40:37
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import * as echarts from 'echarts'
// import axios from 'axios'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

Vue.use(ElementUI)

Vue.use(VueParticles)

Vue.prototype.$echarts = echarts
// Vue.prototype.$http = axios

import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


// router.beforeEach((to, from, next) => {
//   console.log(to.path);
//   if (to.name !== 'login') { next({ name: 'login' }) }
//   else next()
//   // if (to.path == '/login' || to.path == '/register') {
//   //   next()
//   // } else {
//   //   alert('请先等陆')
//   //   next('login')
//   // }
// })

new Vue({
  router,
  render: h => h(App,),
}).$mount('#app')
