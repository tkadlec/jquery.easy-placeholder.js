/* Easy Placeholder (c) Aaron Gustafson (@AaronGustafson). MIT License. http://github.com/easy-designs/jquery.easy-placeholder.js */
(function(e){var i=false,d=true,f="placeholder",b="",a="blur",h=e('<em class="placeholder"/>'),g=(function(l){var k=document.createElement("input");if(!("hasOwnProperty" in k&&k.hasOwnProperty("placeholder"))){return i}else{return d}}());function j(k){var l=e(this);if(l.val()==l.attr(f)){l.val(b)}}function c(k){var l=e(this);if(l.val()==b){l.val(l.attr(f))}}e.fn.enable_placeholder=function(){if(!g){e(this).filter(":not([type=radio],[type=checkbox],[type=password])").on("focus",j).on(a,c).trigger(a).end().filter("[type=password]").each(function(){var k=e(this);h.clone().text(k.attr(f)).appendTo(k.parent())})}return this};e("input[placeholder]").enable_placeholder()})(jQuery,document,window,navigator.userAgent.toLowerCase());