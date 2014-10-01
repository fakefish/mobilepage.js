define(['jquery'], function($) {
  console.log('scene.js');

  var Scene = {
  	queue: [],
  	current: 0,
  	len: 0,
  	add: function($ele) {
  		this.queue.push($ele);
  	},

  	start: function() {
  		this.len = this.queue.length;
  	},

  	nextShow: function() {
  		this.queue[this.current++].hide();
  		if(this.current === this.len ) {
  			this.current = 0;
  		}
  		this.queue[this.current].show();
  	}
  }
  return Scene;
});