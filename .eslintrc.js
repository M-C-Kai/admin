/*
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-08-27 15:14:36
 * @LastEditors: lvnini
 * @LastEditTime: 2021-11-08 18:21:42
 */
module.exports = {
  root: true,
  env: {
    "es6": true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
    "node": true,
    "browser": true, // 浏览器全局变量
    "jquery": true // jQuery 全局变量
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",	// 指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    // 使用的额外的语言特性
    "ecmaFeatures": {
        "jsx": true, // 启用 JSX
        "globalReturn": true, // 允许在全局作用域下使用 return 语句
        "impliedStrict": true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
        "experimentalObjectRestSpread": true,	// 启用实验性的 object rest/spread properties 支持。(重要：这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)
    }
  },
  plugins: ['html'],
  rules: {
    // 不检测组件状态
    "vue/no-unused-components": "off",
    "key-spacing": [
      1,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    'indent':'off',
    'vue/script-indent': [
      'error',
      2,
      {
        'baseIndent': 1
      }
    ],
    "no-var": 0
  }
}