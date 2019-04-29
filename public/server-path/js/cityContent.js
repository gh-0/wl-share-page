$(function() {
  var screenHeight = window.screen.availHeight;
  var screenWidth = window.screen.availWidth;
  var search = new URLSearchParams(location.search);
  //初始化内容
  $.ajax({
    type: 'get',
    url:
      (location.host === 'api.wenliaokeji.com'
        ? '/cors-server/article/content/'
        : '/api/article/content/') + search.get('cityId'),
    success: function(data) {
      $('#content').html(data.content);
      console.log($('#content'));
      console.log(data);
      var images = Array.prototype.slice.apply(document.querySelectorAll('img') || []);
      console.log(images);
      images.map(function(img) {
        img.addEventListener('load', function() {
          var completeCount = Array.prototype.slice
            .apply(document.querySelectorAll('img') || [])
            .reduce(function(pre, cur) {
              if (cur.complete) return pre + 1;
            }, 0);
          if (completeCount >= images.length) {
            parent.postMessage({ type: 'LOADED' }, '*');
          }
          console.log(completeCount, images.length);
        });
      });
    },
    error: function(err) {
      console.log(err);
    },
  });

  //视频自适应
  var $contentVideo = $('iframe');
  for (let i = 0; i < $contentVideo.length; i++) {
    var selfWidth = $contentVideo.eq(i).attr('width') || $contentVideo.eq(i).css('width');
    var selfHeight = $contentVideo.eq(i).attr('height') || $contentVideo.eq(i).css('height');
    var fontSize = parseInt($('html').css('fontSize'));
    var mainContentWidth = parseInt($('#content').css('width'));
    var rate = mainContentWidth / parseInt(selfWidth);

    $contentVideo.eq(i).attr('width', mainContentWidth);
    $contentVideo.eq(i).attr('height', rate * parseInt(selfHeight));
  }

  //内容里图片自适应
  var $contentImg = $('img');
  var imgWidth = '';
  var imgHeight = '';
  var attrWidth = '';
  var attrHeight = '';
  var contentWidth = $('#content').css('width');

  for (var i = 0; i < $contentImg.length; i++) {
    $contentImg.eq(i).css('box-sizing', 'border-box');
    typeof $contentImg.eq(i).attr('width') != 'undefined'
      ? (attrWidth = $contentImg.eq(i).attr('width'))
      : (attrWidth = '');
    $contentImg[i].style.width != ''
      ? (imgWidth = $contentImg[i].style.width)
      : (imgWidth = attrWidth);

    typeof $contentImg.eq(i).attr('height') != 'undefined'
      ? (attrHeight = $contentImg.eq(i).attr('height'))
      : (attrHeight = '');
    $contentImg[i].style.height != ''
      ? (imgHeight = $contentImg[i].style.height)
      : (imgHeight = attrHeight);

    if (imgWidth != '' || imgHeight != '') {
      var hasPercent = new RegExp(/^\d+%$/);
      if (hasPercent.test(imgWidth)) {
        $contentImg.eq(i).css('width', imgWidth);
        if ($contentImg.eq(i).css('height')) {
          //					console.log($contentImg.eq(i).css('height'))
        }
      } else {
        //				console.log(imgHeight)
        //				$contentImg.eq(i).css('width', parseInt(imgWidth)'/100 + 'rem'')
        //				$contentImg.eq(i).css('height', parseInt(imgHeight)/100 + 'rem')
        if (imgWidth > contentWidth) {
          if (imgHeight) {
            //365编辑器
            $contentImg.eq(i).css('width', '100%');
            imgHeight = (parseInt(imgHeight) * $contentImg.eq(i).width()) / parseInt(imgWidth);
            $contentImg.eq(i).css('height', 'auto');
          } else {
            $contentImg.eq(i).css('width', '100%');
          }
        } else {
          if ($contentImg.eq(i).attr('width')) {
            $contentImg.eq(i).css('width', parseInt(imgWidth) + 'px');
          }
          if ($contentImg.eq(i).attr('height')) {
            $contentImg.eq(i).css('height', parseInt(imgHeight) + 'px');
          }
        }
      }
    }
  }
  //section适配

  var $section = $('section');
  for (var i = 0; i < $section.length; i++) {
    var _this = $section.eq(i);
    //秀米
    if (parseFloat(_this.css('width')) > parseFloat(contentWidth)) {
      _this.css('width', '100%');
    }
    //135
    if (_this.children('img').length == 1 && _this.children('img').width() > _this.width()) {
      _this.children('img').css('width', '100%');
      _this.children('img').css('height', 'auto');
    }
  }
});
