Class: LazyLoad {#LazyLoad}
=====================================

LazyLoad allows you to defer image loading until the user scrolls down to each image.

### Implements:

Options, Events

LazyLoad Method: constructor {#LazyLoad:constructor}
---------------------------------------------------------------


### Syntax:

	var myLazyLoad = new LazyLoad(options);

### Arguments:

1. options - (*object*)  An object containing the LazyLoad instance's options.

### Options:

* range - (*integer*, defaults to 200)  The offset of the container scroll position to the image before the image should load.
* image - (*string*, defaults to 'blank.gif')  The image to replace to the original image.
* resetDimensions - (*boolean*, defaults to true)  Should the LazyLoad instance remove the image's "width" and "height" attributes?
* elements - (*string*, defaults to 'img')  The elements to apply LazyLoad to.
* container - (*element*, defaults to window)  The container of any images for LazyLoad to be applied to.

### Returns:

A LazyLoad instance.


### Events:

### load

* (*function*) Function to execute when an image is loaded.

### Signature

	onLoad(image)
	
#### Arguments:

1. image - (*Element*) The image element which was loaded.

### scroll

* (*function*) Function to execute when the container is scrolled.

### Signature

	onScroll()
	
### complete

* (*function*) Function to execute when all images have been loaded.

### Signature

	onLoad()