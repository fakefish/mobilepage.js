require.config({
  paths: {
    jquery: '../lib/jquery/dist/jquery.min'
  }
})
require(['jquery', 'scene', 'touch', 'audio'], function($, Scene, Touch, Audio) {

  $(document).ready(function() {
    $(".spinner").parent().remove();
    

    // Scene.initCss({
    //   $('.step1 .desc').css({
    //     // top: $('.step1 .title'),
    //   })
    // })
    Scene.animate({
      '0' : function() {
        $('.step1 .title').stop().delay(500).animate({
          top: '50%',
          opacity: 1
        });

      },
      '1' : function() {
        console.log(1)
      },
      '2' : function() {
        console.log(2)
      },
      '3' : function() {
        console.log(3)
      }
    });
    Scene.init({
      container: '.container',
      selector: '.steps',
      type: 2
    });
  })
});