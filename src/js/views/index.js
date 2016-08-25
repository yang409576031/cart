<<<<<<< HEAD
var indexTpl = require('../tpls/index.string');
var indexTp2 = require('../tpls/index-h.string');
=======
// Register  注册
var registertpl=require('../tpls/register.string');
// 定义视图
SPA.defineView('register', {
  // 装载模板
  html: registertpl
});

// Login  登录
var logintpl=require('../tpls/login.string');
>>>>>>> origin/handong
// 定义视图
SPA.defineView('login', {
  // 装载模板
<<<<<<< HEAD
  html: indexTpl,
  
  // 定义插件
  plugins: ['delegated'],
  
  // // 装载子视图
  modules: [{
    name: 'content',
    container: '#m-container',
    views: ['home','search','release'],
    defaultTag: 'home'
  }],
  bindEvents: {
  },
    // 绑定tap事件
  bindActions: {
    "switch":function (el, data) {
      this.modules.content.launch(data.name);
      $('#y_footer div').eq($(el.el).index()).addClass('y_b1')
        .siblings().removeClass('y_b1');
    }
  }
=======
  html: logintpl
>>>>>>> origin/handong
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