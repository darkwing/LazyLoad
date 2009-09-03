LazyLoad
=========

LazyLoad allows you to defer image loading until the user scrolls down to each image.

![Screenshot](http://davidwalsh.name/dw-content/lazyload.png)


How to Use
----------

LazyLoad should be initialized during the DOMReady event.  There are no required arguments -- only options.

	#JS
	/* LazyLoad instance */
	var lazyloader = new LazyLoad({
		range: 200,
		image: 'blank.gif',
		elements: 'img'
	});
	

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/lazyLoad](http://davidwalsh.name/js/lazyLoad)