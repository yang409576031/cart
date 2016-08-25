// pullToRefresh
module.exports = function (opt) {
  opt.eleHeadAndFoot = opt.eleHeadAndFoot || $('#home-swiper');
  opt.objMoreAjax = opt.objMoreAjax || {
    url: '/cart/mock/home2.json',
    type: 'get',
    data: {
      type: 'more',
      pageNo: 2
    },
    success: function (res) {
        opt.vm.livelist.pushArray(res.data);
        myScroll.refresh();
        myScroll.scrollTo(0, self.y + topSize);
        foot.removeClass('down');
        foot.attr('src', '/cart/images/arrow.png');
    }
  };

  // var myScroll = this.widgets.myScroll;
  var myScroll = opt.scroll;
   myScroll.refresh();
  var topSize = 35;
  var ele = opt.eleHeadAndFoot;
  var foot = ele.find('.foot img'),
      bottomImgHasClass = foot.hasClass('down');
  myScroll.on('scroll', function () {
    var y = this.y,
    maxY = this.maxScrollY - y;
    if (maxY >= 0) {
      $('.foot').show();
      !bottomImgHasClass && foot.addClass('down');
      return '';
    }
  });
  myScroll.on('scrollEnd', function () {
    var maxY = this.maxScrollY - this.y;
    var self = this;
    if (maxY > -topSize && maxY < 0) {
      myScroll.scrollTo(0, self.maxScrollY + topSize);
      foot.removeClass('down')
    } else if (maxY >= 0) {
      foot.attr('src', '/cart/images/ajax-loader.gif');
      // ajax上拉加载数据
      $.ajax({
        url: '/cart/mock/home2.json',
        type: 'get',
        data: {
          type: 'more',
          pageNo: 2
        },
        success: function (res) {
          opt.vm.livelist.pushArray(res.list);
          myScroll.refresh();
          myScroll.scrollTo(0, self.y + topSize);
          foot.removeClass('down');
          foot.attr('src', '/cart/images/arrow.png');
        }
      });
    }
  });
};
