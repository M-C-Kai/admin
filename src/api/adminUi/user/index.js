/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-08-09 16:53:43
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-09 16:56:48
 */
import request from '@/utils/axios.js'

export function getUserList() {
  return request({
    url: '/api/user/getUserInfo',
    method: 'get'
  })
}
