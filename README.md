LazyLoad
=========

LazyLoad allows you to defer image loading until the user scrolls down to each image. Using LazyLoad can easily save you bandwidth and allow the page to load faster for the user.  This plugin takes only a minute to implement so using LazyLoad is a must.

![Screenshot](http://davidwalsh.name/dw-content/lazyload.png)


How to Use
----------

LazyLoad should be initialized during the DOMReady event.  There are no required arguments -- only options.

	#JS
	/* LazyLoad instance */
	var lazyloader = new LazyLoad({
		range: 200,
		realSrcAttribute: "data-src",
		useFade: true,
		elements: 'img',
		container: window
	});
	
	#HTML
	<img src="http://davidwalsh.name/dw-content/blank.gif" data-src="http://davidwalsh.name/dw-content/mexico-2009/small/102_1152.jpg" />
	<!-- or -->
	<img data-src="http://davidwalsh.name/dw-content/mexico-2009/small/102_1152.jpg" />
	

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/lazyload](http://davidwalsh.name/js/lazyLoad)