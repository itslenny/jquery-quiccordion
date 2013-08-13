/*
 *      jQuery Quiccordion v1.0.1
 *
 *      An extremely quick, simple, lightweight, recursive accordion menu plugin
 *
 *      Copyright (c) 2012 Lenny Urbanowski
 *
 *      Released under MIT license:
 *      http://www.opensource.org/licenses/mit-license.php
 *      
 */
(function(e){e.fn.extend({options:{activeClass:"li.active",preserveChildren:true,openLevel:0,closedClass:"closed",childrenClass:"has-children"},quiccordion:function(t){var n=this;e.extend(n.options,t);return this.each(function(){var e=t;n.initializeMenu(this)})},initializeMenu:function(t){var n=this;var t=e(this);var r=e("li",t);e(t).css("list-style","none").css("cursor","pointer");e("ul,li",t).css("list-style","none").css("cursor","pointer");n.initializeSubMenu(t,0)},initializeSubMenu:function(t,n){n++;var r=this;t.children("li:first").addClass("first");t.children("li:last").addClass("last");t.children("li").each(function(){e(this).click(function(t){t.stopPropagation();if(e(this).children("ul").is(":visible")){r._closeItems(e(this).children("ul:visible"))}else{e(this).parent().parent().siblings("li").each(function(){r._closeItems(e(this).children("ul:visible"))});e(this).siblings("li").each(function(){r._closeItems(e(this).children("ul:visible"))});r._openItems(e(this).children("ul"))}});if(e(this).find(r.options.activeClass).length==0&&n>r.options.openLevel){e(this).children("ul").hide();e(this).addClass(r.options.closedClass)}if(e(this).children("ul").length>0){e(this).addClass(r.options.childrenClass);r.initializeSubMenu(e(this).children("ul"),n)}})},_closeItems:function(t){var n=this;t.slideUp();t.parent().addClass(n.options.closedClass);if(!n.options.preserveChildren){t.find("ul:visible").each(function(){n._closeItems(e(this))})}},_openItems:function(e){e.slideDown();e.parent().removeClass(this.options.closedClass)}})})(jQuery)