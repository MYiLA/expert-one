'use strict';
$(document).ready(function () {
// кастомные селекты
  if ($('.form-auth__select--client').length > 0 ) {
      var choiceAuthClient = new Choices('.form-auth__select--client', {
      searchChoices: false,
      shouldSort: true,
      sorter: function () {
        return true
      }
    });
  }

  if ($('.form-auth__select--expensive-speaker').length > 0 ) {
  var choiceAuthExpensiveSpeaker = new Choices('.form-auth__select--expensive-speaker', {
    searchChoices: false,
    shouldSort: true,
    sorter: function () {
      return true
    }
  });
  }

  if ($('.form-auth__select--event-department').length > 0 ) {
  var choiceAuthDepartment = new Choices('.form-auth__select--event-department', {
    searchChoices: false,
    shouldSort: true,
    sorter: function () {
      return true
    }
  });
  }

  if ($('.form-auth__select--external-conference').length > 0 ) {
  var choiceAuthExternalConf = new Choices('.form-auth__select--external-conference', {
    searchChoices: false,
    shouldSort: true,
    sorter: function () {
      return true
    }
  });
  }

  if ($('.form-auth__select--field-conference').length > 0 ) {
  var choiceAuthFieldConf = new Choices('.form-auth__select--field-conference', {
    searchChoices: false,
    shouldSort: true,
    sorter: function () {
      return true
    }
  });
}

  var invalidTime = 4000;
  // маски для формы
  var formAuthElement = document.querySelector('.expert-one .form-auth__form');
  var nameInputElement = formAuthElement.querySelector('#auth-first-name');
  var nameLastInputElement = formAuthElement.querySelector('#auth-last-name');
  var nameMiddleInputElement = formAuthElement.querySelector('#auth-middle-name');
  var websiteInputElement = $('#auth-website');

  var positionInputElement = formAuthElement.querySelector('#auth-position');

  var phoneInputElement = formAuthElement.querySelector('#auth-tel');



  var speakerNumInputElement = formAuthElement.querySelector('#auth-speakers-num');



  var nameMask = IMask(nameInputElement, {
    mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\.]{1,20}$/,
  });

  var nameLastMask = IMask(nameLastInputElement, {
    mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\.]{1,20}$/,
  });

  var nameMiddleMask = IMask(nameMiddleInputElement, {
    mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\.]{1,20}$/,
  });

  var positionMask = IMask(positionInputElement, {
    mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\.]{1,20}$/,
  });

  var phoneMask = IMask(phoneInputElement, {
    mask: '+{7} 000 000-00-00',
    placeholderChar: '_',
    lazy: false,
  });

  var numberMask = IMask(speakerNumInputElement, {
    mask: Number, // enable number mask

    // other options are optional with defaults below
    scale: 0, // digits after point, 0 for integers
    signed: false, // disallow negative
    thousandsSeparator: '', // any single char
    padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
    normalizeZeros: false, // appends or removes zeros at ends
    // radix: ',',  // fractional delimiter
    // mapToRadix: ['.']  // symbols to process as radix

    // additional number interval options (e.g.)
    min: 0,
    // max: 10000
  });

  // вход через вк (показ/скрытие элементов)
  var closeSocialEnter = function () {
    $('.expert-one .social-enter').addClass('dissolve');
    $('.expert-one .social-enter').removeClass('active')
    $('.expert-one').removeClass('no-scroll');
  }

  var openSocialEnter = function () {
    $('.expert-one .social-enter').addClass('active')
    $('.expert-one').addClass('no-scroll');
    setTimeout(function () {
      $('.expert-one .social-enter').removeClass('dissolve');
    }, 10);
  }

  var openUserProfile = function () {
    $('.expert-one .user-profile').addClass('active');
    $('.expert-one').addClass('no-scroll');
    setTimeout(function () {
      $('.expert-one .user-profile').removeClass('dissolve');
    }, 10);
  }

  var closeUserProfile = function () {
    $('.expert-one .user-profile').addClass('dissolve');
    $('.expert-one .user-profile').removeClass('active');
    $('.expert-one').removeClass('no-scroll');
  }

  // $('.expert-one .social-enter__link').on('click', function () {
  //   closeSocialEnter();
  //   openUserProfile();
  //   $('.auth__change').addClass('active');
  //   $('.auth__help').removeClass('active');
  // })

  $('.expert-one .form-auth__input--mask').on('focus', function () {
    $(this).addClass('active')
  })

  // функции закрытия попапов
  var closePopupAuth = function () {
    setTimeout(function () {
      $('.expert-one .popup-auth--auth').addClass('dissolve');
    }, 0);

    setTimeout(function () {
      $('.expert-one .popup-auth--auth').removeClass('active');
      $('.expert-one').removeClass('no-scroll');
      $('.expert-one .auth').removeClass('signin');
      $('.expert-one .auth').removeClass('signup');
      closeUserProfile();
    }, 400)
  }

  var form = $('.js__rf');

  var closeAuthForm = function () {
    setTimeout(function () {
      $('.expert-one .popup-auth--form').addClass('dissolve');
    }, 0);

    // закрыть и сбросить форму
    setTimeout(function () {
      $('.expert-one .popup-auth--form').removeClass('active');
      $('.expert-one').removeClass('no-scroll');
      form[0].reset();
    }, 400)
  }

  var closePopupThanks = function () {
    setTimeout(function () {
      $('.expert-one .popup-auth--thanks').addClass('dissolve');
    }, 0);

    setTimeout(function () {
      $('.expert-one .popup-auth--thanks').removeClass('active');
      $('.expert-one').removeClass('no-scroll');
    }, 400);
  }


  // функции открытия попапов

  var openPopupAuth = function () {
    $('.expert-one .popup-auth--auth').addClass('active');
    $('.expert-one').addClass('no-scroll');

    // $('.auth__change').removeClass('active');
    // $('.auth__help').addClass('active');

    openSocialEnter();
    setTimeout(function () {
      $('.expert-one .popup-auth--auth').removeClass('dissolve');
    }, 10);
  }

  var openAuthForm = function () {
    $('.expert-one .popup-auth--form').addClass('active');
    $('.expert-one').addClass('no-scroll');
    setTimeout(function () {
      $('.expert-one .popup-auth--form').removeClass('dissolve');
    }, 10);
  }

  var openPopupThanks = function () {
    closePopupAuth();
    closeAuthForm();
    $('.expert-one .popup-auth--thanks').addClass('active');
    $('.expert-one').addClass('no-scroll');
    setTimeout(function () {
      $('.expert-one .popup-auth--thanks').removeClass('dissolve');
    }, 10);
  }

  $('.expert-one .auth__btn--signin').on('click', function () {
    closePopupAuth()
  })

  $('.expert-one .auth__close').on('click', function () {
    closePopupAuth()
  })

  // открыть попап авторизации
  $('.expert-one .expert-one_btn--signin').on('click', function () {
    openPopupAuth();
    $('.expert-one .auth').addClass('signin');
    $('.expert-one .auth__title').text('Авторизация');

  })

  // открыть попап регистрации
  $('.expert-one .expert-one_btn--signup').on('click', function () {
    openPopupAuth();
    $('.expert-one .auth').addClass('signup');
    $('.expert-one .auth__title').text('Регистрация');
  })



  // внутреннее управление попапами регистрации/авторизации

  $('.expert-one .auth__btn--signup').on('click', function () {
    openAuthForm()
  })


  $('.expert-one .form-auth__btn-back').on('click', function () {
    closeAuthForm()
  })


  $('.expert-one .form-auth__close').on('click', function () {
    closePopupAuth();
    closeAuthForm();
  })

  //функции проверки заполненности обязательных полей
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  var btn = form.find('.js__btn-submit');
  form.children('.js__rfield').addClass('js__empty-field');

  var checkInputMail = function () {
    if (($('#auth-mail').val() != '') &&
    ($('#auth-mail').val().match(mailformat))) {
      $('#auth-mail').removeClass('js__empty-field')
    } else $('#auth-mail').addClass('js__empty-field');
  }


  var checkInputTel = function () {
    if (
      ($('#auth-tel').val().search('_') === -1) &&
      ($('#auth-tel').val() != '') &&
      ($('#auth-tel').val()[3] === '9')
    ) {
      $('#auth-tel').removeClass('js__empty-field');
    } else $('#auth-tel').addClass('js__empty-field')
  }

  var checkInputWebsite = function () {
    if (
      (websiteInputElement.val() === '') ||
      (websiteInputElement.val().match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/))) {
        websiteInputElement.removeClass('js__empty-field');
      }
     else 
    websiteInputElement.addClass('js__empty-field');
  }

  websiteInputElement.on('focusout', function () {
    if (websiteInputElement.hasClass('js__empty-field')) {
      websiteInputElement.css({
        'border-color': '#eb5757'
      });

      setTimeout(function () {
        websiteInputElement.removeAttr('style');
      }, invalidTime);
    };
  });

  var checkSelectClient = function (selectIdString) {
    var wrapSelect = $(selectIdString).parents('.choices__inner');
    $(selectIdString).val() === '' ? wrapSelect.addClass('js__empty-field') : wrapSelect.removeClass('js__empty-field');
  }

  var checkInput = function () {
    form.children('.js__rfield').each(function () {
      if ($(this).val() != '') {
        $(this).removeClass('js__empty-field');
      } else {
        $(this).addClass('js__empty-field');
      }
    });
  }

  var isRequiredFilled = false;
  // Проверка в режиме реального времени
  setInterval(function () {
    // Запускаем функцию проверки полей на заполненность

    checkInput();
    checkInputMail();
    checkInputTel();
    checkSelectClient('#auth-client');
    checkSelectClient('#auth-expensive-speaker');
    checkSelectClient('#auth-event-department');
    checkSelectClient('#auth-external-conference');
    checkSelectClient('#auth-field-conference');
    checkInputWebsite();
    
    var sizeEmpty = form.find('.js__empty-field').length;
    if (sizeEmpty > 0) {
      if (btn.prop('disabled')) {
        isRequiredFilled = false;
        return false
      } else {
        isRequiredFilled = false;
        btn.prop('disabled', true);
        btn.removeClass('active');
      }
    } else {
      isRequiredFilled = true;
      btn.prop('disabled', false);
      btn.addClass('active');
    }
  }, 500);



  // подсказка для емейла по потере фокуса
  var mailIsValide = function () {
    if ($('#auth-mail').val().match(mailformat)) {
      return true
    } else {
      $('#auth-mail').siblings('.form-auth__invalid-message').addClass('active');
      $('#auth-mail').css({
            'border-color': '#eb5757'
      });

      setTimeout(function () {
        $('#auth-mail').removeAttr('style');
        $('#auth-mail').siblings('.form-auth__invalid-message').removeClass('active');
      }, invalidTime);
      return false;
    }
  };

  $('#auth-mail').on('focusout', mailIsValide);



  // подсказка для телефона по потере фокуса
  var telIsValide = function () {

    if (
      $('#auth-tel').val()[3] === '9' 
      && 
      $('#auth-tel').val().search('_') === -1
      &&
      $('#auth-tel').val() !== '') {
      return true;
    } else {
      $('#auth-tel').siblings('.form-auth__invalid-message').addClass('active');
      $('#auth-tel').css({
        'border-color': '#eb5757'
        });
      setTimeout(function () {
        $('#auth-tel').removeAttr('style');
        $('#auth-tel').siblings('.form-auth__invalid-message').removeClass('active');
      }, invalidTime);
      return false;
    }
  };

  $('#auth-tel').on('focusout', telIsValide);
})
