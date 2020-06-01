"use strict";
$(document).ready(function () {
    new Choices(".expert-one .form-auth__select--client", {
        searchChoices: !1,
        shouldSort: !0,
        sorter: function () {
            return !0
        }
    }), new Choices(".expert-one .form-auth__select--expensive-speaker", {
        searchChoices: !1,
        shouldSort: !0,
        sorter: function () {
            return !0
        }
    }), new Choices(".expert-one .form-auth__select--event-department", {
        searchChoices: !1,
        shouldSort: !0,
        sorter: function () {
            return !0
        }
    }), new Choices(".expert-one .form-auth__select--external-conference", {
        searchChoices: !1,
        shouldSort: !0,
        sorter: function () {
            return !0
        }
    }), new Choices(".expert-one .form-auth__select--field-conference", {
        searchChoices: !1,
        shouldSort: !0,
        sorter: function () {
            return !0
        }
    });
    var e = document.querySelector(".expert-one .form-auth__form"),
        t = e.querySelector("#auth-first-name"),
        s = e.querySelector("#auth-last-name"),
        o = e.querySelector("#auth-middle-name"),
        a = e.querySelector("#auth-position"),
        n = e.querySelector("#auth-tel"),
        r = e.querySelector("#auth-speakers-num");
    IMask(t, {
        mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/
    }), IMask(s, {
        mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/
    }), IMask(o, {
        mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/
    }), IMask(a, {
        mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/
    }), IMask(n, {
        mask: "+{7} 000 000-00-00",
        placeholderChar: "_",
        lazy: !1
    }), IMask(r, {
        mask: Number,
        scale: 0,
        signed: !1,
        thousandsSeparator: "",
        padFractionalZeros: !1,
        normalizeZeros: !1,
        min: 0
    });
    // $(".expert-one .social-enter__link").on("click", (function () {
    //   $(".expert-one .social-enter").addClass("dissolve"), $(".expert-one .social-enter").removeClass("active"), $(".expert-one").removeClass("no-scroll"), $(".expert-one .user-profile").addClass("active"), $(".expert-one").addClass("no-scroll"), setTimeout((function () {
    //     $(".expert-one .user-profile").removeClass("dissolve")
    //   }), 10), $(".auth__change").addClass("active"), $(".auth__help").removeClass("active")
    // })), 
    $(".expert-one .form-auth__input--mask").on("focus", (function () {
        $(this).addClass("active")
    }));
    var l = function () {
            setTimeout((function () {
                $(".expert-one .popup-auth--auth").addClass("dissolve")
            }), 0), setTimeout((function () {
                $(".expert-one .popup-auth--auth").removeClass("active"), $(".expert-one").removeClass("no-scroll"), $(".expert-one .auth").removeClass("signin"), $(".expert-one .auth").removeClass("signup"), $(".expert-one .user-profile").addClass("dissolve"), $(".expert-one .user-profile").removeClass("active"), $(".expert-one").removeClass("no-scroll")
            }), 400)
        },
        i = $(".js__rf"),
        u = function () {
            setTimeout((function () {
                $(".expert-one .popup-auth--form").addClass("dissolve")
            }), 0), setTimeout((function () {
                $(".expert-one .popup-auth--form").removeClass("active"), $(".expert-one").removeClass("no-scroll"), i[0].reset()
            }), 400)
        },
        c = function () {
            $(".expert-one .popup-auth--auth").addClass("active"), $(".expert-one").addClass("no-scroll"), $(".auth__change").removeClass("active"), $(".auth__help").addClass("active"), $(".expert-one .social-enter").addClass("active"), $(".expert-one").addClass("no-scroll"), setTimeout((function () {
                $(".expert-one .social-enter").removeClass("dissolve")
            }), 10), setTimeout((function () {
                $(".expert-one .popup-auth--auth").removeClass("dissolve")
            }), 10)
        },
        p = function () {
            l(), u(), $(".expert-one .popup-auth--thanks").addClass("active"), $(".expert-one").addClass("no-scroll"), setTimeout((function () {
                $(".expert-one .popup-auth--thanks").removeClass("dissolve")
            }), 10)
        };
    $(".expert-one .auth__btn--signin").on("click", (function () {
        l()
    })), $(".expert-one .auth__close").on("click", (function () {
        l()
    })), $(".expert-one .expert-one_btn--signin").on("click", (function () {
        c(), $(".expert-one .auth").addClass("signin"), $(".expert-one .auth__title").text("Авторизация")
    })), $(".expert-one .expert-one_btn--signup").on("click", (function () {
        c(), $(".expert-one .auth").addClass("signup"), $(".expert-one .auth__title").text("Регистрация")
    })), $(".expert-one .auth__btn--signup").on("click", (function () {
        $(".expert-one .popup-auth--form").addClass("active"), $(".expert-one").addClass("no-scroll"), setTimeout((function () {
            $(".expert-one .popup-auth--form").removeClass("dissolve")
        }), 10)
    })), $(".expert-one .form-auth__btn-back").on("click", (function () {
        u()
    })), $(".expert-one .form-auth__close").on("click", (function () {
        l(), u()
    }));
    var h = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        d = i.find(".js__btn-submit");
    i.children(".js__rfield").addClass("js__empty-field");
    var m = !1;
    setInterval((function () {
        var e;
        if (i.children(".js__rfield").each((function () {
                "" != $(this).val() ? $(this).removeClass("js__empty-field") : $(this).addClass("js__empty-field")
            })), "" != $("#auth-mail").val() && $("#auth-mail").val().match(h) ? $("#auth-mail").removeClass("js__empty-field") : $("#auth-mail").addClass("js__empty-field"), -1 === $("#auth-tel").val().search("_") && "" != $("#auth-tel").val() && "9" === $("#auth-tel").val()[3] ? $("#auth-tel").removeClass("js__empty-field") : $("#auth-tel").addClass("js__empty-field"), e = $("#auth-client").parents(".choices__inner"), "" === $("#auth-client").val() ? e.addClass("js__empty-field") : e.removeClass("js__empty-field"), i.find(".js__empty-field").length > 0) {
            if (d.prop("disabled")) return m = !1, !1;
            m = !1, d.prop("disabled", !0)
        } else m = !0, p.addClass("active");
        d.prop("disabled", !1);
    }), 500);
    var f = function () {
        return !!$("#auth-mail").val().match(h) || ($("#auth-mail").siblings(".form-auth__invalid-message").addClass("active"), $("#auth-mail").css({
            "border-color": "#eb5757"
        }), setTimeout((function () {
            $("#auth-mail").removeAttr("style"), $("#auth-mail").siblings(".form-auth__invalid-message").removeClass("active")
        }), 4e3), !1)
    };
    $("#auth-mail").on("focusout", f);
    var _ = function () {
        return "9" === $("#auth-tel").val()[3] && -1 === $("#auth-tel").val().search("_") && "" !== $("#auth-tel").val() || ($("#auth-tel").siblings(".form-auth__invalid-message").addClass("active"), $("#auth-tel").css({
            "border-color": "#eb5757"
        }), setTimeout((function () {
            $("#auth-tel").removeAttr("style"), $("#auth-tel").siblings(".form-auth__invalid-message").removeClass("active")
        }), 4e3), !1)
    };
    $("#auth-tel").on("focusout", _);
    var v = function (e) {
        var t, s;
        e.preventDefault(), t = _(), s = f(), t && s && m && setTimeout(p, 1e3)
    };
    // $(".expert-one .form-auth__submit").on("click", (function (e) {
    //   v(e)
    // })), i.on("submit", (function (e) {
    //   v(e)
    // })), $(".expert-one .thanks__close").on("click", (function () {
    //   setTimeout((function () {
    //     $(".expert-one .popup-auth--thanks").addClass("dissolve")
    //   }), 0), setTimeout((function () {
    //     $(".expert-one .popup-auth--thanks").removeClass("active"), $(".expert-one").removeClass("no-scroll")
    //   }), 400)
    // }))
})