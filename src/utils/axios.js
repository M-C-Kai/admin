/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-07-28 10:07:20
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-09 16:09:44
 */
import axios from 'axios'

const http = axios.create()

// 请求等待时间
http.defaults.timeout = 2500

// 特殊请求加长等待时间
// instance.get('/',{timeout:5000})

// 拦截请求（axios全局拦截）
http.interceptors.request.use(config => {
  // console.log('拦截请求', config);
  return config
}, error => {
  // console.log('拦截请求', error);
  return Promise.reject(error)
})

export default http
