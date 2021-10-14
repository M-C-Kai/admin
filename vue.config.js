/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-07-22 10:06:08
 * @LastEditors: Kail
 * @LastEditTime: 2021-08-27 14:20:57
 */
module.exports = {
  devServer: {
    port: 3000,//页面端口
    open: false,//启动时打开网页
    hot: true,//热更新
    proxy: { //代理
      '/api': {
        target: 'http://localhost:4000/',
        pathRewrite: { '^/api': '' },
      }
    }
  }
}