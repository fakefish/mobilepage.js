define(['scene'],function(Scene) {
  console.log('touch.js');

  var Touch = {
  	type: function(type) {
  		return type || 'default';
  	},
  	move: function() {
  		Scene.nextShow();
  	}
  }
  $('.container').on('touchstart', function() {
  	Touch.move();
  	// console.log('move')
  });

  return Touch;
});