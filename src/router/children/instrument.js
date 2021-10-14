/*
 * @Descripttion:工具类路由
 * @version:
 * @Author: Kail
 * @Date: 2021-08-30 09:37:08
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-30 10:29:07
 */

export const instrument = [
  {
    path: '/instrument/json',
    name: 'json',
    component: () => import('@/view/adminUi/instrument/json')
  },
  {
    path: '/instrument/imges',
    name: 'imges',
    component: () => import('@/view/adminUi/instrument/imges')
  }
]

export default instrument