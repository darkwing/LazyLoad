/*
---
description:     LazyLoad

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - LazyLoad
...
*/
var LazyLoad=new Class({Implements:[Options,Events],options:{range:200,image:"blank.gif",resetDimensions:true,elements:"img",container:window,fireScroll:true,mode:"vertical"},initialize:function(a){this.setOptions(a);this.container=document.id(this.options.container);this.elements=$$(this.options.elements);var b=(this.options.mode=="vertical"?"y":"x");this.containerDimension=this.container.getSize()[b];this.start=0;this.elements=this.elements.filter(function(d){if(d.getPosition(this.container)[b]>this.containerDimension+this.options.range){d.store("oSRC",d.get("src")).set("src",this.options.image);if(this.options.resetDimensions){d.store("oWidth",d.get("width")).store("oHeight",d.get("height")).set({width:"",height:""});}return true;}},this);var c=function(){var d=this.container.getScroll()[b];if(d>this.start){this.elements=this.elements.filter(function(e){if((this.container.getScroll()[b]+this.options.range+this.containerDimension)>=e.getPosition(this.container)[b]){if(e.retrieve("oSRC")){e.set("src",e.retrieve("oSRC"));}if(this.options.resetDimensions){e.set({width:e.retrieve("oWidth"),height:e.retrieve("oHeight")});}this.fireEvent("load",[e]);return false;}return true;},this);this.start=d;}this.fireEvent("scroll");if(!this.elements.length){this.container.removeEvent("scroll",c);this.fireEvent("complete");}}.bind(this);this.container.addEvent("scroll",c);if(this.options.fireScroll){this.container.fireEvent("scroll");}}});