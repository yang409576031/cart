// Register  注册
var registertpl=require('../tpls/register.string');
// 定义视图
SPA.defineView('register', {
  // 装载模板
  html: registertpl
});

// Login  登录
var logintpl=require('../tpls/login.string');
// 定义视图
SPA.defineView('login', {
  // 装载模板
  html: logintpl
});


// My  我的
var mytpl=require('../tpls/my.string');
// 定义视图
SPA.defineView('my', {
  // 装载模板
  html: mytpl
});

// Set Up 设置
var setuptpl=require('../tpls/setup.string');
// 定义视图
SPA.defineView('setup', {
  // 装载模板
  html: setuptpl
});