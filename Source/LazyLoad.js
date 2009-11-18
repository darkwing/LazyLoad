var LazyLoad = new Class({

	Implements: [Options,Events],

	/* additional options */
	options: {
		range: 200,
		image: 'blank.gif',
		resetDimensions: true,
		elements: 'img',
		container: window
	},

	/* initialize */
	initialize: function(options) {
	
		/* vars */
		this.setOptions(options);
		this.container = document.id(this.options.container);
		this.elements = $$(this.options.elements);
		this.containerHeight = this.container.getSize().y;
		this.start = 0;

		/* find elements remember and hold on to */
		this.elements = this.elements.filter(function(el) {
			/* reset image src IF the image is below the fold and range */
			if(el.getPosition(this.container).y > this.containerHeight + this.options.range) {
				el.store('oSRC',el.get('src')).set('src',this.options.image);
				if(this.options.resetDimensions) {
					el.store('oWidth',el.get('width')).store('oHeight',el.get('height')).set({'width':'','height':''});
				}
				return true;
			}
		},this);
	
		/* create the action function */
		var action = function() {
			var cpos = this.container.getScroll().y;
			if(cpos > this.start) {
				this.elements = this.elements.filter(function(el) {
					if((this.container.getScroll().y + this.options.range + this.containerHeight) >= el.getPosition(this.container).y) {
						if(el.retrieve('oSRC')) { el.set('src',el.retrieve('oSRC')); }
						if(this.options.resetDimensions) {
							el.set({
								width: el.retrieve('oWidth'),
								height: el.retrieve('oHeight') 
							});
						}
						this.fireEvent('load',[el]);
						return false;
					}
					return true;
				},this);
				this.start = cpos;
			}
			this.fireEvent('scroll');
			/* remove this event IF no elements */
			if(!this.elements.length) {
				this.container.removeEvent('scroll',action);
				this.fireEvent('complete');
			}
		}.bind(this);
	
		/* listen for scroll */
		this.container.addEvent('scroll',action);
	}
});