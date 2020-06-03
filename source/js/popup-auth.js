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

  var choices = [choiceAuthClient, choiceAuthExpensiveSpeaker, choiceAuthDepartment, choiceAuthExternalConf, choiceAuthFieldConf];

  console.log(choices);
  // регулярки
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  var siteFormat = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zа-я0-9]+([\-\.]{1}[a-zа-я0-9]+)*\.[a-zа-я]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  var nameFormat = /^[a-zA-Zа-яА-Я-\.]{1,}$/;
  var companyFormat = /^[a-zA-Zа-яА-Я0-9- .&\.]{1,}$/;

  // Проверка в режиме реального времени
  var isChecking = false;

  // вывод подсказок
  var invalidTime = 3500;

  var showInvalideMsg = function (input, msg) {
    input.siblings('.form-auth__invalid-message').text(msg)
    input.siblings('.form-auth__invalid-message').addClass('active');
    // input.css({
    //       'border-color': '#eb5757',
    // });

    setTimeout(function () {
      // input.removeAttr('style');
      input.siblings('.form-auth__invalid-message').removeClass('active');
    }, invalidTime);
}

  var invalideMailMsg = 'Неверно введен Емейл';
  var invalideTelMsg = 'Неверно введен телефон';
  var invalideCompanyMsg = 'Неверно введено название компании. Используйте только буквы, пробелы, цифры и знаки "-" , "&", "."';
  var invalideSiteMsg = 'Неверно введен адрес или домен cайта';
  
  var createMsgInvalideName = function (name) {
    return 'Введите ' + name + '. Используйте только буквы и знак "-"';
  };

  var createMsgInvalideEmpty = function (name) {
    return 'Введите ' + name;
  };

  var createMsgUniqueSymbol = function (symbol) {
    return 'Знак "' + symbol + '" может быть использован только один раз';
  };

  var createMsgInvalideLength = function (length) {
    return 'Длина ответа должна быть не более ' + length + ' символов';
  };


  // var createMsgNumberRange = function(min, max) {
  //   return 'Введите целое число от ' + min + ' до ' + max;
  // }

  // инпуты
  var formAuthElement = document.querySelector('.expert-one .form-auth__form');

  var nameInputElement = $('#auth-first-name');
  var nameLastInputElement = $('#auth-last-name');
  var nameMiddleInputElement = $('#auth-middle-name');
  var mailInputElement = $('#auth-mail');
  var phoneInputElement = $('#auth-tel');
  var positionInputElement = $('#auth-position');
  var companyInputElement = $('#auth-company');
  var siteInputElement = $('#auth-website');
  var speakerNumInputElement = $('#auth-speakers-num');

  // маски для формы

  var phoneMask = IMask(phoneInputElement[0], {
    mask: '+{7} 000 000-00-00',
    placeholderChar: '_',
    lazy: false,
  });

  var numberMask = IMask(speakerNumInputElement[0], {
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
    max: 9999
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
      $(document).unbind('keyup', escDocumentHandler);
      $('.expert-one').removeClass('no-scroll');
      // отключить селекты
      choices.forEach(function(element) {
        element.destroy();
      });
      // сброс формы
      form[0].reset();
      // отключить проверку в режиме реального времени
      isChecking = false;
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
    $(document).bind('keyup', escDocumentHandler);
    // включить селекты
    choices.forEach(function(element) {
      element.init();
    });
    // Включить проверку в режиме реального времени
    isChecking = true;
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
  
  var btn = form.find('.js__btn-submit');
  form.children('.js__rfield').addClass('js__empty-field');



  var checkInputFirstName = function () {
    if (
      nameInputElement.val() != '' &&
      nameInputElement.val().length <= 20 &&
      nameInputElement.val().match(nameFormat)
    ) {
      nameInputElement.removeClass('js__empty-field');
    } else {
      nameInputElement.addClass('js__empty-field');
    }
  }


  var checkInputLastName = function () {
    if (
        nameLastInputElement.val() != '' &&
        nameLastInputElement.val().length <= 20 &&
        nameLastInputElement.val().match(nameFormat)
      ) {
        nameLastInputElement.removeClass('js__empty-field');
      } else {
        nameLastInputElement.addClass('js__empty-field');
      }
  }


  var checkInputMiddleName = function () {
    if (
        nameMiddleInputElement.val() === '' || (
        nameMiddleInputElement.val().length <= 20 &&
        nameMiddleInputElement.val().match(nameFormat)
      )
      ) {
        nameMiddleInputElement.removeClass('js__empty-field');
      } else {
        nameMiddleInputElement.addClass('js__empty-field');
      }
  }


  var checkInputMail = function () {
    if (
    (mailInputElement.val() != '') &&
    (mailInputElement.val().length <= 30) &&
    mailInputElement.val().match(mailFormat)
    ) {
      mailInputElement.removeClass('js__empty-field')
    } else mailInputElement.addClass('js__empty-field');
  }


  var checkInputTel = function () {
    if (
      (phoneInputElement.val().search('_') === -1) &&
      (phoneInputElement.val() != '') &&
      (phoneInputElement.val()[3] === '9')
    ) {
      phoneInputElement.removeClass('js__empty-field');
    } else phoneInputElement.addClass('js__empty-field')
  }


  var checkInputPosition = function () {
    if (
        positionInputElement.val() != '' &&
        positionInputElement.val().length <= 20 &&
        positionInputElement.val().match(nameFormat)
      ) {
        positionInputElement.removeClass('js__empty-field');
      } else {
        positionInputElement.addClass('js__empty-field');
      }
  }


  var checkInputCompany = function () {
    if (
      (companyInputElement.val() != '') &&
      (companyInputElement.val().length <= 20) &&
      (companyInputElement.val().indexOf('&') === companyInputElement.val().lastIndexOf('&')) &&
      companyInputElement.val().match(companyFormat)
      ) {
        companyInputElement.removeClass('js__empty-field');
      } else {
        companyInputElement.addClass('js__empty-field');
      }
  }


  var checkInputSite = function () {
    if (
        (siteInputElement.val() === '') ||
        (
          siteInputElement.val().match(siteFormat) &&
          (siteInputElement.val().length <= 30)
        )
      ) {
        siteInputElement.removeClass('js__empty-field');
      }
     else 
    siteInputElement.addClass('js__empty-field');
  }


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

  var checkSpeakersNum = function () {
    if($('#auth-speakers-num').val() != '') {
      $('#auth-speakers-num').removeClass('js__empty-field');
    } else
      $('#auth-speakers-num').addClass('js__empty-field');
  };

  var isRequiredFilled = false;
  // Проверка в режиме реального времени

  btn.on('click', function () {
    isChecking = false;
    btn.prop('disabled', true);
  })

    setInterval(function () {
    if(!isChecking) {
      return
    };
    // Запускаем функцию проверки полей на заполненность
    checkSpeakersNum();
    checkInput();
    checkInputFirstName();
    checkInputLastName();
    checkInputMiddleName();
    checkInputMail();
    checkInputTel();
    checkSelectClient('#auth-client');
    checkSelectClient('#auth-expensive-speaker');
    checkSelectClient('#auth-event-department');
    checkSelectClient('#auth-external-conference');
    checkSelectClient('#auth-field-conference');
    checkInputPosition();
    checkInputCompany();
    checkInputSite();
    
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

  // после отправки задизейблить



  // подсказки при потере фокуса
  var showErrorName = function () {
    if (!(nameInputElement.val() != '')) {
      showInvalideMsg(nameInputElement, createMsgInvalideEmpty('имя'))
      return false
    };

    if (!(nameInputElement.val().length <= 24)) {
      showInvalideMsg(nameInputElement, createMsgInvalideLength(24))
      return false
    };

    if (!nameInputElement.val().match(nameFormat)) {
      showInvalideMsg(nameInputElement, createMsgInvalideName('имя'))
      return false
    };

    return true
  }

  nameInputElement.on('focusout', showErrorName)


  var showErrorNameLast = function () {
      if (!(nameLastInputElement.val() != '')) {
    showInvalideMsg(nameLastInputElement, createMsgInvalideEmpty('фамилию'))
    return false
  };

  if (!(nameLastInputElement.val().length <= 24)) {
    showInvalideMsg(nameLastInputElement, createMsgInvalideLength(24))
    return false
  }

  if (!nameLastInputElement.val().match(nameFormat)) {
    showInvalideMsg(nameLastInputElement, createMsgInvalideName('фамилию'))
    return false
  }

  return true
  };

 nameLastInputElement.on('focusout', showErrorNameLast);



  var showErrorNameMiddle = function () {
        if(nameMiddleInputElement.val() === '') {
      return true
    }

    if (!(nameMiddleInputElement.val().length <= 24)) {
      showInvalideMsg(nameMiddleInputElement, createMsgInvalideLength(24))
      return false
    }

    if (!nameMiddleInputElement.val().match(nameFormat)) {
      showInvalideMsg(nameMiddleInputElement, createMsgInvalideName('отчество'))
      return false
    }

    return true
  }

  nameMiddleInputElement.on('focusout', showErrorNameMiddle)



  var showErrorMail = function () {
        if (!(mailInputElement.val() != '')) {
      showInvalideMsg(mailInputElement, createMsgInvalideEmpty('е-мейл'));
      return false;
    }

    if (!(mailInputElement.val().length <= 24)) {
      showInvalideMsg(mailInputElement, createMsgInvalideLength(24));
      return false;
    };

    if (!mailInputElement.val().match(mailFormat)) {
      showInvalideMsg(mailInputElement, invalideMailMsg);
      return false
    }
    return true
  }

  mailInputElement.on('focusout', showErrorMail);



  var showErrorPhone = function () {
        if (
      !(phoneInputElement.val().search('_') === -1) ||
      !(phoneInputElement.val() != '')
    ) {
      showInvalideMsg(phoneInputElement, createMsgInvalideEmpty('телефон'));
      return false
    }

    if (!(phoneInputElement.val()[3] === '9')) {
      showInvalideMsg(phoneInputElement, invalideTelMsg);
      return false;
    }
    return true;
  };

  phoneInputElement.on('focusout', showErrorPhone);



  var showErrorPosition = function () {
        if (!(positionInputElement.val() != '')) {
      showInvalideMsg(positionInputElement, createMsgInvalideEmpty('вашу должность'))
      return false
    }

    if (!(positionInputElement.val().length <= 24)) {
      showInvalideMsg(positionInputElement, createMsgInvalideLength(24))
      return false
    }

    if (!positionInputElement.val().match(nameFormat)) {
      showInvalideMsg(positionInputElement, createMsgInvalideName('вашу должность'))
      return false
    }

    return true
  };

  positionInputElement.on('focusout', showErrorPosition);



  var showErrorCompany = function () {
     if (!(companyInputElement.val() != '')) {
      showInvalideMsg(companyInputElement, createMsgInvalideEmpty('название компании'))
      return false
    }

    if (!(companyInputElement.val().length <= 24)) {
      showInvalideMsg(companyInputElement, createMsgInvalideLength(24))
      return false
    }

    if (!(companyInputElement.val().indexOf('&') === companyInputElement.val().lastIndexOf('&'))) {
      showInvalideMsg(companyInputElement, createMsgUniqueSymbol('&'))
      return false
    }

    if (!companyInputElement.val().match(companyFormat)) {
      showInvalideMsg(companyInputElement, invalideCompanyMsg)
      return false
    }

    return true
  };

  companyInputElement.on('focusout', showErrorCompany);



  var showErrorSite = function () {
    if(siteInputElement.val() === '') {
      return true
    }

    if (!(siteInputElement.val().length <= 24)) {
      showInvalideMsg(siteInputElement, createMsgInvalideLength(24))
      return false
    }

    if (!siteInputElement.val().match(siteFormat)) {
      showInvalideMsg(siteInputElement, invalideSiteMsg)
      return false
    }

    return true
  };

  siteInputElement.on('focusout', showErrorSite);


  var showErrorSelect = function (selectIdString) {
    if ($(selectIdString).val() === '') {
      var wrapSelect = $(selectIdString).parents('.choices__inner');
      wrapSelect.css({
      'border-color': '#eb5757',
    });

    setTimeout(function () {
      wrapSelect.removeAttr('style');
    }, invalidTime);
    }
  }


  var showErrorSpeakersNum = function () {
    if($('#auth-speakers-num').val() === '') {
      showInvalideMsg($('#auth-speakers-num'), 'Введите целое число от 0 до 9999')
      return false
    }
    return true
  };

  $('#auth-speakers-num').on('focusout', showErrorSpeakersNum);



  var escDocumentHandler = function (evt) {
    if(evt.keyCode == 13){
      showErrorSpeakersNum();
      showErrorSelect('#auth-client');
      showErrorSelect('#auth-expensive-speaker');
      showErrorSelect('#auth-event-department');
      showErrorSelect('#auth-external-conference');
      showErrorSelect('#auth-field-conference');
      showErrorName();
      showErrorNameLast();
      showErrorNameMiddle();
      showErrorMail();
      showErrorPhone();
      showErrorPosition();
      showErrorCompany();
      showErrorSite();
    }
  }

})
