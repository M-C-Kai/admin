/*
 * @Descripttion:邮件接口
 * @version:
 * @Author: Kail
 * @Date: 2021-08-26 11:44:12
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-27 10:06:33
 */
import request from '@/utils/axios.js'

export function getEmail() {
  return request({
    url: '/api/email/getEmail',
    method: 'get'
  })
}

export function addEmail(data) {
  return request({
    url: '/api/email/addEmail',
    method: 'post',
    data: data
  })
}

export function updataEmail(data) {
  return request({
    url: '/api/email/updataEmail',
    method: 'post',
    data: data
  })
}

export function send(data) {
  return request({
    url: '/api/email/sendEmali',
    method: 'get',
    params: data
  })
}
