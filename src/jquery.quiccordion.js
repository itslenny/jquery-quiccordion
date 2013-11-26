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

(function($){
    $.fn.extend({
        quiccordion: function(options)
        {

            var defaults={
                activeClass: 'li.active',
                preserveChildren: true,
                openLevel: 0,
                closedClass: 'closed',
                childrenClass: 'has-children',
                inlineStyles: true
            }        

            $.extend(defaults, options);
            
            return this.each(function() {
               new Quickcordion($(this),defaults);                   
            });
        }
    });
        
    //quickcordion class (keep the $ namespace clean)
    var Quickcordion = function(obj,opts){
        var options=opts;
      
        //set up the menu... called on each object passed through
        var initializeMenu = function(obj)
        {

            var items = $("li", obj);
            if(options.inlineStyles){
                $(obj).css('list-style','none').css('cursor','pointer');
                $("ul,li",obj).css('list-style','none').css('cursor','pointer');
            }
            initializeSubMenu(obj,0);
        }
        
        //recursive function to set up recursive menu system
        //make all li's with sub ul's become clickable headers
        var initializeSubMenu = function(obj,depth)
        {
            depth++;
            obj.children("li:first").addClass("first");
            obj.children("li:last").addClass("last");            
            obj.children("li").each(function(){
                $(this).click(function(e){                
                    e.stopPropagation();   
                    if($(this).children("ul").is(":visible"))
                    {
                        _closeItems($(this).children('ul:visible'));
                    }
                    else
                    {
                      $(this).parent().parent().siblings("li").each(function(){
                         _closeItems($(this).children('ul:visible'));
                      });
                      $(this).siblings("li").each(function(){
                        _closeItems($(this).children('ul:visible'));
                      });
                      _openItems($(this).children('ul'));
                    }
                });
               //if it's in the active tree don't hide it
               if($(this).find(options.activeClass).length == 0 && depth > options.openLevel)
               {
                  $(this).children("ul").hide();
                  $(this).addClass(options.closedClass);
               }

               if($(this).children("ul").length >0)
               {
                  $(this).addClass(options.childrenClass);
                  initializeSubMenu($(this).children("ul"),depth);
               }
            });
        }
        
        var _closeItems = function(obj){
            obj.slideUp();
            obj.parent().addClass(options.closedClass);
             if(!options.preserveChildren)
             {
                obj.find("ul:visible").each(function(){
                    _closeItems($(this));
                });
             }
        }
        
        var _openItems = function(obj){
            obj.slideDown();
            obj.parent().removeClass(options.closedClass);
        }
        
        initializeMenu(obj);
    }
    
})(jQuery);