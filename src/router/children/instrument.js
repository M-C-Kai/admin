/*
 * @Descripttion:工具类路由
 * @version:
 * @Author: Kail
 * @Date: 2021-08-30 09:37:08
 * @LastEditors: lvnini
 * @LastEditTime: 2021-11-08 17:39:13
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
},
{
    path: '/niaobaiqang/live',
    name: 'live',
    component: () => import('@/view/adminUi/niaobaiqang/live')
}
]

export default instrument