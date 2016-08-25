var indexHome = require('../tpls/index-h.string');
var scroll = require('../utils/scroll.js');
SPA.defineView('home', {
	  html: indexHome,
		plugins: [
	    'delegated', {
	      name: 'avalon',
	      options: function (vm) {
	        vm.livelist = [];
	      }
	    }
	  ],
	  bindEvents: {
	    'show': function () {
		      // 获得vm
		      var vm = this.getVM();
		      // ajax拉取数据
		     $.ajax({
		       /*url: '/api/livelist.php',*/
		      	url:"/cart/mock/home.json",
		        type: 'get',
		        data: {
		          type: 'more',
		          pageNo: 1
		        },
		        success: function (res) {
		        	vm.livelist = res.list;
		        }
		     });
		     scroll({
		        scroll: this.widgets.myScroll,
		        vm: vm
		      })
	  	}
	}
})