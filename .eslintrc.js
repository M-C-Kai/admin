/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-08-27 15:14:36
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-27 15:14:37
 */
module.exports = {
  root: true,
  env: {
    "node": true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    "parser": "babel-eslint"
  },
  rules: {
    "key-spacing": [
      1,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "no-var": 0
  }
}