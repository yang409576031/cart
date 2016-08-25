var indexTpl = require('../tpls/index.string');
var indexTp2 = require('../tpls/index-h.string');
// 定义视图
SPA.defineView('index', {
  // 装载模板
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
});
