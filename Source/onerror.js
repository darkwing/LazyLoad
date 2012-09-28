/*Adding onerror listener to show all images, if an error will occur*/
window.onerror = function() {

	window.onload = function() {

		/*Getting all images*/
		var images = document.getElementsByTagName('img');

		if(images.length > 0) {

			var src = null;

			for( var i = 0; i <= images.length; i++ ) {

				if( typeof images[i] != 'undefined' ) {

					src = images[i].getAttribute('data_src');

					/*If specified real src in image, change it*/
					if( src ) {

						images[i].src = src;

					}

				}

			}

		}

	}

}