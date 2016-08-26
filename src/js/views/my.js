// My  我的
var mytpl=require('../tpls/my.string');
// 定义视图
SPA.defineView('my', {
  // 装载模板
  html: mytpl,
  plugins: [
    'delegated'
  ],
  // 绑定tap
  bindActions: {
    'goto.setup': function () {
      SPA.open('setup');
    }
  }
});