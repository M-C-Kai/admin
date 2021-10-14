/*
 * @Descripttion:cookies
 * @version:
 * @Author: Kail
 * @Date: 2021-08-30 14:46:56
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-30 15:58:02
 */

export default {
  SET_COOKIES: ((key, value) => {
    console.log(key, value);
    this.$cookies.set(key, value)
  })
}