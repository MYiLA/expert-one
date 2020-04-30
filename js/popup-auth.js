"use strict";!function(){new Choices(".expert-one .form-auth__select--client",{searchChoices:!1,shouldSort:!0,sorter:function(){return!0}}),new Choices(".expert-one .form-auth__select--expensive-speaker",{searchChoices:!1,shouldSort:!0,sorter:function(){return!0}}),new Choices(".expert-one .form-auth__select--event-department",{searchChoices:!1,shouldSort:!0,sorter:function(){return!0}}),new Choices(".expert-one .form-auth__select--external-conference",{searchChoices:!1,shouldSort:!0,sorter:function(){return!0}}),new Choices(".expert-one .form-auth__select--field-conference",{searchChoices:!1,shouldSort:!0,sorter:function(){return!0}});var e=document.querySelector(".expert-one .form-auth__form"),t=e.querySelector("#auth-first-name"),s=e.querySelector("#auth-last-name"),o=e.querySelector("#auth-middle-name"),a=e.querySelector("#auth-position"),n=e.querySelector("#auth-tel"),r=e.querySelector("#auth-speakers-num");IMask(t,{mask:/^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/}),IMask(s,{mask:/^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/}),IMask(o,{mask:/^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/}),IMask(a,{mask:/^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/}),IMask(n,{mask:"+{7} 000 000-00-00",placeholderChar:"_",lazy:!1}),IMask(r,{mask:Number,scale:0,signed:!1,thousandsSeparator:"",padFractionalZeros:!1,normalizeZeros:!1,min:0});$(".expert-one .social-enter__link").on("click",(function(){$(".expert-one .social-enter").addClass("dissolve"),$(".expert-one .social-enter").removeClass("active"),$(".expert-one").removeClass("no-scroll"),$(".expert-one .user-profile").addClass("active"),$(".expert-one").addClass("no-scroll"),setTimeout((function(){$(".expert-one .user-profile").removeClass("dissolve")}),10),$(".auth__change").addClass("active"),$(".auth__help").removeClass("active")})),$(".expert-one .form-auth__input--mask").on("focus",(function(){$(this).addClass("active")}));var i=function(){setTimeout((function(){$(".expert-one .popup-auth--auth").addClass("dissolve")}),0),setTimeout((function(){$(".expert-one .popup-auth--auth").removeClass("active"),$(".expert-one").removeClass("no-scroll"),$(".expert-one .auth").removeClass("signin"),$(".expert-one .auth").removeClass("signup"),$(".expert-one .user-profile").addClass("dissolve"),$(".expert-one .user-profile").removeClass("active"),$(".expert-one").removeClass("no-scroll")}),400)},l=$(".js__rf"),u=function(){setTimeout((function(){$(".expert-one .popup-auth--form").addClass("dissolve")}),0),setTimeout((function(){$(".expert-one .popup-auth--form").removeClass("active"),$(".expert-one").removeClass("no-scroll"),l[0].reset()}),400)},c=function(){$(".expert-one .popup-auth--auth").addClass("active"),$(".expert-one").addClass("no-scroll"),$(".auth__change").removeClass("active"),$(".auth__help").addClass("active"),$(".expert-one .social-enter").addClass("active"),$(".expert-one").addClass("no-scroll"),setTimeout((function(){$(".expert-one .social-enter").removeClass("dissolve")}),10),setTimeout((function(){$(".expert-one .popup-auth--auth").removeClass("dissolve")}),10)},p=function(){i(),u(),$(".expert-one .popup-auth--thanks").addClass("active"),$(".expert-one").addClass("no-scroll"),setTimeout((function(){$(".expert-one .popup-auth--thanks").removeClass("dissolve")}),10)};$(".expert-one .auth__btn--signin").on("click",(function(){i()})),$(".expert-one .auth__close").on("click",(function(){i()})),$(".expert-one .expert-one_btn--signin").on("click",(function(){c(),$(".expert-one .auth").addClass("signin"),$(".expert-one .auth__title").text("Авторизация")})),$(".expert-one .expert-one_btn--signup").on("click",(function(){c(),$(".expert-one .auth").addClass("signup"),$(".expert-one .auth__title").text("Регистрация")})),$(".expert-one .auth__btn--signup").on("click",(function(){$(".expert-one .popup-auth--form").addClass("active"),$(".expert-one").addClass("no-scroll"),setTimeout((function(){$(".expert-one .popup-auth--form").removeClass("dissolve")}),10)})),$(".expert-one .form-auth__btn-back").on("click",(function(){u()})),$(".expert-one .form-auth__close").on("click",(function(){i(),u()}));var h=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,m=l.find(".js__btn-submit");l.children(".js__rfield").addClass("js__empty-field");var d=!1;setInterval((function(){if(l.children(".js__rfield").each((function(){""!=$(this).val()?$(this).removeClass("js__empty-field"):$(this).addClass("js__empty-field")})),""!=$("#auth-mail").val()&&$("#auth-mail").val().match(h)?$("#auth-mail").removeClass("js__empty-field"):$("#auth-mail").addClass("js__empty-field"),-1===$("#auth-tel").val().search("_")&&""!=$("#auth-tel").val()&&"9"===$("#auth-tel").val()[3]?$("#auth-tel").removeClass("js__empty-field"):$("#auth-tel").addClass("js__empty-field"),l.find(".js__empty-field").length>0){if(!m.hasClass("active"))return d=!1,!1;d=!1,m.removeClass("active")}else d=!0,m.addClass("active")}),500);var f=function(){return!!$("#auth-mail").val().match(h)||($("#auth-mail").siblings(".form-auth__invalid-message").addClass("active"),setTimeout((function(){$("#auth-mail").siblings(".form-auth__invalid-message").removeClass("active")}),4e3),!1)};$("#auth-mail").on("focusout",f);var _=function(){return"9"===$("#auth-tel").val()[3]||($("#auth-tel").siblings(".form-auth__invalid-message").addClass("active"),setTimeout((function(){$("#auth-tel").siblings(".form-auth__invalid-message").removeClass("active")}),4e3),!1)};$("#auth-tel").on("focusout",_);var v=function(e){var t,s;e.preventDefault(),t=_(),s=f(),t&&s&&d?(l.find(".form-auth__submit").css({cursor:"auto","background-color":"#888888","pointer-event":"auto"}),setTimeout((function(){l.find(".form-auth__submit").removeAttr("style")}),5e3),setTimeout(p,1e3)):(l.find(".js__empty-field").css({"border-color":"#eb5757"}),setTimeout((function(){l.find(".js__empty-field").removeAttr("style")}),4e3))};$(".expert-one .form-auth__submit").on("click",(function(e){v(e)})),l.on("submit",(function(e){v(e)})),$(".expert-one .thanks__close").on("click",(function(){setTimeout((function(){$(".expert-one .popup-auth--thanks").addClass("dissolve")}),0),setTimeout((function(){$(".expert-one .popup-auth--thanks").removeClass("active"),$(".expert-one").removeClass("no-scroll")}),400)}))}();