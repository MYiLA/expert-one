"use strict";!function(){var e=function(e,t){var s=function(e,t){for(;(e=e.parentElement)&&!e.matches(t););return e}(e,".expert-one .client-order");return!(!s.classList.contains("new")||"Новый"!==t)||(!(!s.classList.contains("work")||"В работе"!==t)||(!(!s.classList.contains("realized")||"Реализован"!==t)||!(!s.classList.contains("unrealized")||"Нереализован"!==t)))};$(".expert-one .client-order__select").each((function(t){var s=$(this)[0];new Choices(s,{searchChoices:!1,shouldSort:!0,position:"bottom",itemSelectText:"",sorter:function(){return!0},choices:[{value:"Новый",selected:e(s,"Новый")},{value:"В работе",selected:e(s,"В работе")},{value:"Реализован",selected:e(s,"Реализован")},{value:"Нереализован",selected:e(s,"Нереализован")}]}),s.addEventListener("addItem",(function(e){$(this).parents(".client-order").removeClass(["unrealized","new","work","realized"]),"Нереализован"===e.detail.value&&$(this).parents(".client-order").addClass("unrealized"),"Новый"===e.detail.value&&$(this).parents(".client-order").addClass("new"),"В работе"===e.detail.value&&$(this).parents(".client-order").addClass("work"),"Реализован"===e.detail.value&&$(this).parents(".client-order").addClass("realized")}))}));var t=$(".expert-one .filter-clients__wrap-checkbox");$(".expert-one .filter-clients__open").on("click",(function(){var e;(e=t).addClass("active"),$(".expert-one").addClass("no-scroll"),setTimeout((function(){e.removeClass("dissolve")}),10)})),$(".expert-one .filter-clients__close-popup").on("click",(function(){var e;e=t,setTimeout((function(){e.addClass("dissolve")}),0),setTimeout((function(){e.removeClass("active"),$(".expert-one").removeClass("no-scroll")}),400)})),$(".expert-one .speaker-link__expand").each((function(e){$(this).on("click",(function(){$(this).parents(".client-order__wrap-speaker").css({"max-height":"500px"}),$(this).addClass("dissolve")}))}))}();