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
var LazyLoad=new Class({Implements:[Options,Events],options:{range:200,image:"blank.gif",resetDimensions:true,elements:"img",container:window,fireScroll:true,mode:"vertical",startPosition:0},initialize:function(a){this.setOptions(a);this.container=document.id(this.options.container);this.elements=$$(this.options.elements);var b=(this.options.mode=="vertical"?"y":"x");this.containerDimension=this.container.getSize()[b];this.startPosition=0;var d=(this.container!=window&&this.container!=document.body?this.container:"");this.elements=this.elements.filter(function(f){var e=f.getPosition(d)[b];if(e>this.containerDimension+this.options.range){f.store("oSRC",f.get("src")).set("src",this.options.image);if(this.options.resetDimensions){f.store("oWidth",f.get("width")).store("oHeight",f.get("height")).set({width:"",height:""})}return true}},this);var c=function(){var e=this.container.getScroll()[b];if(e>this.startPosition){this.elements=this.elements.filter(function(f){if((e+this.options.range+this.containerDimension)>=f.getPosition(d)[b]){if(f.retrieve("oSRC")){f.set("src",f.retrieve("oSRC"))}if(this.options.resetDimensions){f.set({width:f.retrieve("oWidth"),height:f.retrieve("oHeight")})}this.fireEvent("load",[f]);return false}return true},this);this.startPosition=e}this.fireEvent("scroll");if(!this.elements.length){this.container.removeEvent("scroll",c);this.fireEvent("complete")}}.bind(this);window.addEvent("scroll",c);if(this.options.fireScroll){c()}}});