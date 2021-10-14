/*
 * @Descripttion:获取菜单
 * @version:
 * @Author: Kail
 * @Date: 2021-08-25 17:24:23
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-25 17:25:36
 */
import request from '@/utils/axios.js'

// 获取根目录
export function getRoot() {
  return request({
    url: '/api/route/getTree',
    method: 'get'
  })
}
