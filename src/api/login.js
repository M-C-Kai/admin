/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-07-28 10:29:47
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-09 16:53:12
 */
import request from '@/utils/axios.js'

export function login(query) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: query
  })
}