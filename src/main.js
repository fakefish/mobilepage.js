require.config({
  paths: {
    jquery: '../lib/jquery/dist/jquery.min'
  }
})
require(['jquery', 'scene', 'touch', 'audio'], function($, Scene, Touch, Audio) {

  $(document).ready(function() {
    $(".spinner").parent().remove();
    

    Scene.init('.steps', '.container');
  })
});