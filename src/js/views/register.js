// Register  注册
var registertpl=require('../tpls/register.string');
// 定义视图
SPA.defineView('register', {
  // 装载模板
  html: registertpl,
  plugins: [
    'delegated'
  ],
  // 绑定tap
  bindActions: {
    'back-logo': function () {
      this.hide();
    }
  }
});