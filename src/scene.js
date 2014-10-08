define(['jquery','touch'], function($, Touch) {
  console.log('scene.js');
  var WIDTH = $('body').width();
  var HEIGHT = $('body').height();

  var TRANSITION_END = 'webkitTransitionEnd';
  var TRANSITION_CSS = '-webkit-transition';
  var TRANSFORM_CSS = '-webkit-transform';
  var TRANSITION = 'webkitTransition';
  if(document.body.style.transform) {
    TRANSITION_END = 'transitionend';
    TRANSITION_CSS = 'transition';
    TRANSFORM_CSS = 'transform';
    TRANSITION = 'transition';
  }
  
  var _this;
  var childTop;

  var resultIndex = 0;

  var Scene = {
    len: 0,
    lines: [],
    animates: [],
    init: function(selector, container) {
      _this = this;
      this.$ele = $(selector);
      this.$ele.height = $(selector).height();
      this.$ele.width = $(selector).width();
      this.$container = $(container);
      this.len = this.$ele.children().length;


      var $ele = this.$ele;
      var $container = this.$container;
      var len = this.len;
      var beginPos = 0;
      var start, end;


      for(var i = 0; i < this.len; i++) {
        this.lines.push(i * HEIGHT);
      }

      this.animates[0]();
      Touch.init(selector, container);
      Touch.start(function(e) {
        beginPos = e.touches[0].clientY - $ele.data('top');
        start = e.touches[0].clientY;
      });
      Touch.move(function(e) {
        touches = e.touches && ( e.touches.length ? e.touches : [e] );
        var dis = touches[0].clientY-beginPos;
        // if(dis > 0) {
        //   return;
        // }
        
        // if(dis < -_this.lines[_this.lines.length-1]) {
        //   console.log(dis, -_this.lines[_this.lines.length-1])
        //   return ;
        // }
        // console.log(dis < -_this.lines[_this.lines.length-1])
        _this.move(dis);
        end = touches[0].clientY;
      });
      Touch.end(function(e) {
        for(var i = len; i ; i--) {
          var $children = $ele.children()
          var childTop = $children.eq(i-1).offset().top;
          var direction = (end - start < 0);// true 是上滑，画面下滚，false相反
          

          if( childTop < 0 ) {
            if(direction) {
               // 如果向上滑动
              if( childTop > -HEIGHT/6 ) {
                _this.move(-_this.lines[i-1]);
                resultIndex = i - 1;
              } else if( childTop > -HEIGHT){
                i = i === len ? (i-1):i;
                _this.move(-_this.lines[i]);
                resultIndex = i;
              } else {
                // _this.move)
              }
            } else {
              // 向下滑动
              if( childTop > -HEIGHT/6 * 5 ) {
                _this.move(-_this.lines[i-1]);
                resultIndex = i - 1;
              } else if( childTop > -HEIGHT){
                _this.move(-_this.lines[i]);
                resultIndex = i;
              }
            }
          } else {
            _this.move(0);
          }
        }
        // console.log(resultIndex);
        _this.$ele.find('*').attr('style','');
        _this.animates[resultIndex]();

      });
    },

    move: function(goTo) {
      this.$ele.data('top',goTo);
      setTimeout(function(){
        Scene.$ele.css(TRANSFORM_CSS,'translate3d(0,'+goTo+'px,0)');
      },0)
    },

    animate: function(animates) {
      this.animates = animates;
    }
  }
  return Scene;
});