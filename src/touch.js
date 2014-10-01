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
  $(document).on('click', function() {
  	Touch.move();
  });

  return Touch;
});