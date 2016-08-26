// Login  登录
var logintpl=require('../tpls/login.string');
SPA.defineView('login', {
  // 装载模板
  html: logintpl,
  plugins: [
    'delegated'
  ],
  // 绑定tap
  bindActions: {
    'goto.register': function () {
      SPA.open('register');
    }
  }
})
