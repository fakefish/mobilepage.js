define(['jquery'],function($) {
  console.log('touch.js');

  var Touch = {
    init: function(selector, container) {
      this.$ele = $(selector);
      this.$container = $(container);
      this.$ele.data('top',0);
    },
    // bind: function(startFn, moveFn, endFn) {

    //   this.$container[0].addEventListener('touchstart', function(e) {
    //     startFn(e);
    //   }, false);
    //   this.$container[0].addEventListener('touchmove', function(e) {
    //     moveFn(e)
    //   }, false);
    //   this.$container[0].addEventListener('touchend', function(e) {
    //     endFn(e);
    //   }, false);


    // },
    start: function(fn) {
      this.$container[0].addEventListener('touchstart', function(e) {
        fn(e);
      }, false);
    },
    move: function(fn) {
      this.$container[0].addEventListener('touchmove', function(e) {
        fn(e)
      }, false);
    },
    end: function(fn) {
      this.$container[0].addEventListener('touchend', function(e) {
        fn(e)
      }, false);
    },
  }
  


  return Touch;
});