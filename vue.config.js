/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-07-22 10:06:08
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-09 16:09:49
 */
module.exports = {
  devServer: {
    port: 3000,
    open: true,
    hot: true,//热更新
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',
        pathRewrite: { '^/api': '' },
      }
    }
  }
}