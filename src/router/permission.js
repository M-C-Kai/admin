/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-08-30 16:46:58
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-30 17:14:32
 */
import router from './router/index'
// import store from './store'

router.beforeEach((to, from, next) => {
  if (this.$cookeies.get('token')) {
    console.log('已有token');
  } else {
    next('/login')
  }
})