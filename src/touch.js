define(['jquery'],function($) {
  console.log('touch.js');

  var Touch = {
    init: function(selector, container) {
      this.$ele = $(selector);
      this.$container = $(container);
      this.$ele.data('top',0);
    },

    start: function(fn) {
      document.addEventListener('touchstart', function(e) {
        fn(e);
        return false;
      }, false);
    },
    move: function(fn) {
      document.addEventListener('touchmove', function(e) {
        fn(e);
        return false;
      }, false);
    },
    end: function(fn) {
      document.addEventListener('touchend', function(e) {
        fn(e);
        return false;
      }, false);
    },
  }
  


  return Touch;
});