module.exports = {
  root: true, // 表示这是项目的根 ESLint 配置文件
  env: {
    browser: true, // 浏览器环境
    node: true,    // Node.js 环境
  },
  extends: [
    'eslint:recommended',    // 使用推荐的 ESLint 规则
    'plugin:vue/essential',  // 使用 Vue 推荐的 ESLint 规则
  ],
  parserOptions: {
    parser: 'babel-eslint',  // 使用 babel-eslint 作为解析器
  },
  rules: {
    // 这里可以自定义规则
    'no-unused-vars': 'off',    // 关闭未使用变量的警告
    'no-console': 'off',        // 允许使用 console
    'no-debugger': 'off',       // 允许使用 debugger
  },
};
