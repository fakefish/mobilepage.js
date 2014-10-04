define(['jquery'],function($) {
  console.log('touch.js');

  var Touch = {
    init: function(selector, container) {
      this.$ele = $(selector);
      this.$container = $(container);
      this.$ele.data('top',0);
    },

    start: function(fn) {
      this.$container[0].addEventListener('touchstart', function(e) {
        fn(e);
      }, false);
    },
    move: function(fn) {
      this.$container[0].addEventListener('touchmove', function(e) {
        fn(e);
        e.preventDefault();
      }, false);
    },
    end: function(fn) {
      this.$container[0].addEventListener('touchend', function(e) {
        fn(e);
      }, false);
    },
  }
  


  return Touch;
});