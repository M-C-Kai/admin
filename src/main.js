/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-07-23 16:45:55
 * @LastEditors: lvnini
 * @LastEditTime: 2021-11-08 16:53:02
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import * as echarts from 'echarts'
import VueCookies from 'vue-cookies'
import VueRippler from "vue-rippler";

// import('@/router/permission')

// import axios from 'axios'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueRippler);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

Vue.use(VueCookies)
Vue.use(ElementUI)

Vue.use(VueParticles)

Vue.prototype.$echarts = echarts
// Vue.prototype.$http = axios

import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './router/permission.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
