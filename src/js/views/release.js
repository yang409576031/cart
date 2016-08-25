var releaseTpl=require('../tpls/release.string');
SPA.defineView('release', {
  // 装载模板
  html: releaseTpl,
  plugins: [
	    'delegated', {
	    	name: 'avalon',
	      options: function (rm) {
	        rm.livelist = [];
	      }
	    }
	 ],
	 bindEvents: {
    'show': function () {
	      // 获得vm
	     	var rm = this.getVM();
	     	var that=this;
	      // ajax拉取数据
	     $.ajax({
	       /*url: '/api/livelist.php',*/
	      	url:"/cart/mock/release.json",
	        type: 'get',
	        data: {
	          type: 'more',
	          pageNo: 1
	        },
	        success: function (res) {
	        	rm.livelist = res.data.list;
	        	that.widgets.myScroll.refresh();
	        }
	     });
  	}
	}
});