require.config({
	paths: {
		jquery: '../lib/jquery/dist/jquery.min'
	}
})
require(['jquery', 'scene', 'touch', 'audio'], function($, Scene, Touch, Audio) {

	$(document).ready(function() {
		$(".spinner").parent().remove();
		
		$('.step').each(function(){
			Scene.add($(this));
		});
		console.log(Scene)

		console.log(Touch)
		Touch.type();

		// Audio.add('.bgaudio');

		Scene.start();
	})
});