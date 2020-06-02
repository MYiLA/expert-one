'use strict';
$(document).ready(function () {
  var customerWrapElement = $('.expert-one .customer-data__wrap-main');
  
  var invalidTime = 4000;




  // регулярки
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  var siteFormat = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zа-я0-9]+([\-\.]{1}[a-zа-я0-9]+)*\.[a-zа-я]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  var nameFormat = /^[a-zA-Zа-яА-Я-\.]{1,}$/;
  var companyFormat = /^[a-zA-Zа-яА-Я0-9- .&\.]{1,}$/;

  // вывод подсказок
  var invalidTime = 3500;

  var showInvalideMsg = function (input, msg) {
    input.siblings('.input-wrap__invalid-message').text(msg)
    input.siblings('.input-wrap__invalid-message').addClass('active');
    // input.css({
    //       'border-color': '#eb5757',
    // });

    setTimeout(function () {
      // input.removeAttr('style');
      input.siblings('.input-wrap__invalid-message').removeClass('active');
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


//инпуты и кнопка
  var btnElement = customerWrapElement.find('.customer-data__btn--save');
  var phoneInputElement = $('.js__tel');
  var mailInputElement = $('.js__mail');
  var nameInputElement = $('.js__name');
  var nameLastInputElement = $('.js__last-name');
  var nameMiddleInputElement = $('.js__middle-name');
  var siteInputElement = $('.js__site');
  var positionInputElement = $('.js__position');
  var companyInputElement = $('.js__company');

//сообщения об ошибке
  // var mailInvalidMessage = mailInputElement.siblings('.input-wrap__invalid-message');
  // var telInvalidMessage = phoneInputElement.siblings('.input-wrap__invalid-message');
  // var btnInvalidMessage = btnElement.siblings('.customer-data__invalid-message');

  //открыть и закрыть редактирование
  $('.expert-one .customer-data__btn--edit').on('click', function () {
    $('.expert-one .customer-data__wrap-main').addClass('edit');
  });

  $('.expert-one .customer-data__btn--save').on('click', function () {
    $('.expert-one .customer-data__wrap-main').removeClass('edit');
  });


  // маски

  var phoneMask = IMask(phoneInputElement[0], {
    mask: '+{7} 000 000-00-00',
    placeholderChar: '_',
    lazy: false,
  });

  // Функция подсветки незаполненных полей


  // функции проверки.
  // var addMessageInInput = function (input, message) {
  //   input.addClass('js__empty-field');
  //   if (message) {
  //     message.addClass('active');
  //     setTimeout(function () {
  //       message.removeClass('active');
  //     }, invalidTime);
  //   }
  // }

  // var checkInputMail = function (mail, message) {
  //   mail.val().match(mailformat)
  //   ||
  //   mail.val() === ''
  //   ?
  //   mail.removeClass('js__empty-field')
  //   : 
  //   addMessageInInput(mail, message);
  // }

  // var checkInputTel = function (tel, message) {
  //   (
  //     (tel.val().search('_') === -1)
  //     &&
  //     (tel.val()[3] === '9')
  //   ) 
  //   ||
  //   (tel.val() === '+7 ___ ___-__-__')
  //   ? 
  //   tel.removeClass('js__empty-field')
  //   :
  //   addMessageInInput(tel, message)
  // }

  // var checkInputWebsite = function () {
  //   if (
  //     (siteInputElement.val() === '') ||
  //     (siteInputElement.val().match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/))) {
  //       siteInputElement.removeClass('js__empty-field');
  //     }
  //    else 
  //    siteInputElement.addClass('js__empty-field');
  // }

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


  var isRequiredFilled = false;

  // Проверка в режиме реального времени
  setInterval(function () {
    // Запускаем функцию проверки полей на заполненность

    checkInputFirstName();
    checkInputLastName();
    checkInputMiddleName();
    checkInputMail();
    checkInputTel();
    checkInputPosition();
    checkInputCompany();
    checkInputSite();

    var sizeEmpty = customerWrapElement.find('.js__empty-field').length;
    if (sizeEmpty > 0) {
      if (btnElement.prop('disabled')) {
        isRequiredFilled = false;
        return false
      } else {
        isRequiredFilled = false;
        btnElement.prop('disabled', true);
      }
    } else {
      isRequiredFilled = true;
      btnElement.prop('disabled', false);
    }
  }, 500);

  // подсказки при потере фокуса
  nameInputElement.on('focusout', function () {

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
  })



 nameLastInputElement.on('focusout', function () {

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
  })



  nameMiddleInputElement.on('focusout', function () {
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
  })


  mailInputElement.on('focusout', function () {
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
  });



  phoneInputElement.on('focusout', function () {
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
  });



  positionInputElement.on('focusout', function () {

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
  })



  companyInputElement.on('focusout', function () {
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
  })



  siteInputElement.on('focusout', function () {

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
  });

});