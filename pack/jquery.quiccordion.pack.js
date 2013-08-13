/*
 *      jQuery Quiccordion v1.0.2
 *
 *      An extremely quick, simple, lightweight, recursive accordion menu plugin
 *
 *      Copyright (c) 2012 Lenny Urbanowski
 *
 *      Released under MIT license:
 *      http://www.opensource.org/licenses/mit-license.php
 *      
 */
(function($){$.fn.extend({options:{activeClass:'li.active',preserveChildren:true,openLevel:0,closedClass:'closed',childrenClass:'has-children'},quiccordion:function(options){var self=this;$.extend(self.options,options);return this.each(function(){var o=options;self.initializeMenu(this)})},initializeMenu:function(obj){var self=this;var obj=$(this);var items=$("li",obj);$(obj).css({'list-style':'none','cursor':'pointer'});$("ul,li",obj).css({'list-style':'none','cursor':'pointer'});self.initializeSubMenu(obj,0)},initializeSubMenu:function(obj,depth){depth++;var self=this;obj.children("li:first").addClass("first");obj.children("li:last").addClass("last");obj.children("li").each(function(){$(this).click(function(e){e.stopPropagation();if($(this).children("ul").is(":visible")){self._closeItems($(this).children('ul:visible'))}else{$(this).parent().parent().siblings("li").each(function(){self._closeItems($(this).children('ul:visible'))});$(this).siblings("li").each(function(){self._closeItems($(this).children('ul:visible'))});self._openItems($(this).children('ul'))}});if($(this).find(self.options.activeClass).length==0&&depth>self.options.openLevel){$(this).children("ul").hide();$(this).addClass(self.options.closedClass)}if($(this).children("ul").length>0){$(this).addClass(self.options.childrenClass);self.initializeSubMenu($(this).children("ul"),depth)}})},_closeItems:function(obj){var self=this;obj.slideUp();obj.parent().addClass(self.options.closedClass);if(!self.options.preserveChildren){obj.find("ul:visible").each(function(){self._closeItems($(this))})}},_openItems:function(obj){obj.slideDown();obj.parent().removeClass(this.options.closedClass)}})})(jQuery);