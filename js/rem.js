!function(t){var e=t.document,n=e.documentElement,i=n.getAttribute("data-use-rem");if(null!==i){var a="NaN"===parseInt(i).toString()?640:parseInt(i),r=a/100,d=n.clientWidth||320;n.style.fontSize=d/r+"px";var o=function(){var t=n.clientWidth;t!==d&&(d=t,n.style.fontSize=1*t/r+"px")};if(e.addEventListener){var s="orientationchange"in t?"orientationchange":"resize";t.addEventListener(s,o,!1),e.addEventListener("DOMContentLoaded",o,!1)}}}(window);