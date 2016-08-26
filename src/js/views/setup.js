// Set Up 设置
var setuptpl=require('../tpls/setup.string');
// 定义视图
SPA.defineView('setup', {
  // 装载模板
  html: setuptpl,
  plugins: [
    'delegated'
  ],
  bindActions: {
    'back': function () {
      this.hide();
    }
  }
});