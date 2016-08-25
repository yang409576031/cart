var serchTpl=require('../tpls/search.string');
var scroll2 = require('../utils/scroll.js');
SPA.defineView('search', {
  // 装载模板
  html: serchTpl,
  plugins: [
	    'delegated', {
	      name: 'avalon',
	      options: function (sm) {
	        sm.livelist = [];
	      }
	    }
	],
	bindEvents: {
    'show': function () {
	      // 获得vm
	      var sm = this.getVM();
	      // ajax拉取数据
	     $.ajax({
	       /*url: '/api/livelist.php',*/
	      	url:"/cart/mock/search.json",
	        type: 'get',
	        data: {
	          type: 'more',
	          pageNo: 1
	        },
	        success: function (res) {
	        	sm.livelist = res.data.list;
	        }
	     });
	     scroll2({
		        scroll: this.widgets.myScroll,
		        vm: sm
	      })
  	}
	}
});