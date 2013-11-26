/*
 *      jQuery Quiccordion v1.0.4
 *
 *      An extremely quick, simple, lightweight, recursive accordion menu plugin
 *
 *      Copyright (c) 2012 Lenny Urbanowski
 *
 *      Released under MIT license:
 *      http://www.opensource.org/licenses/mit-license.php
 *      
 */
(function(e){e.fn.extend({quiccordion:function(n){var r={activeClass:"li.active",preserveChildren:true,openLevel:0,closedClass:"closed",childrenClass:"has-children",inlineStyles:true};e.extend(r,n);return this.each(function(){new t(e(this),r)})}});var t=function(t,n){var r=n;var i=function(t){var n=e("li",t);if(r.inlineStyles){e(t).css("list-style","none").css("cursor","pointer");e("ul,li",t).css("list-style","none").css("cursor","pointer")}s(t,0)};var s=function(t,n){n++;t.children("li:first").addClass("first");t.children("li:last").addClass("last");t.children("li").each(function(){e(this).click(function(t){t.stopPropagation();if(e(this).children("ul").is(":visible")){o(e(this).children("ul:visible"))}else{e(this).parent().parent().siblings("li").each(function(){o(e(this).children("ul:visible"))});e(this).siblings("li").each(function(){o(e(this).children("ul:visible"))});u(e(this).children("ul"))}});if(e(this).find(r.activeClass).length==0&&n>r.openLevel){e(this).children("ul").hide();e(this).addClass(r.closedClass)}if(e(this).children("ul").length>0){e(this).addClass(r.childrenClass);s(e(this).children("ul"),n)}})};var o=function(t){t.slideUp();t.parent().addClass(r.closedClass);if(!r.preserveChildren){t.find("ul:visible").each(function(){o(e(this))})}};var u=function(e){e.slideDown();e.parent().removeClass(r.closedClass)};i(t)}})(jQuery)