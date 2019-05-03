
(fucntion ($) {
	var = namespace = 'colorful';

	$.fn[namespace].defaults = {
		color:'red',
		background:false,
		font:true
	}


	var methods = {
		init:function (option) {
			options =$.extend({},$.fn[namespace].defaults,options);
  
			if (options.font) {
				this.css('color',options.color)
			}
			if (options.background) {
				this.css('background-color',options.color)
			}
			return this;
		}
	}

})