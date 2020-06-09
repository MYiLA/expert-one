'use strict';
$(document).ready(function () {
  var customerWrapElement = $('.expert-one .customer-data__wrap-main');
  
  var invalidTime = 4000;




  // регулярки
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  var siteFormat = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Zа-яА-Я0-9]+([\-\.]{1}[a-zA-Zа-яА-Я0-9]+)*\.[a-zA-Zа-яА]{2,25}(:[0-9]{1,25})?(\/.*)?$/;
  var nameFormat = /^[a-zA-Zа-яА-Я-\.]{1,}$/;
  var companyFormat = /^[a-zA-Zа-яА-Я0-9- .&\.]{1,}$/;
  var maxLength = 50;

  // вывод подсказок
  var invalidTime = 3500;

  var hideShowInvalideMsg = function (input, msg, isShow = false) {
    if (isShow) {
      input.siblings('.input-wrap__invalid-message').text(msg)
      input.siblings('.input-wrap__invalid-message').addClass('active');
      // input.css({
      //       'border-color': '#eb5757',
      // });
    } else {
      input.siblings('.input-wrap__invalid-message').removeClass('active');
    }
    // setTimeout(function () {
    //   // input.removeAttr('style');
    //   input.siblings('.form-auth__invalid-message').removeClass('active');
    // }, invalidTime);
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

  //открыть и закрыть редактирование
  $('.expert-one .customer-data__btn--edit').on('click', function () {
    $('.expert-one .customer-data__wrap-main').addClass('edit');
    $(document).bind('keyup', escDocumentHandler);
  });

  $('.expert-one .customer-data__btn--save').on('click', function () {
    $('.expert-one .customer-data__wrap-main').removeClass('edit');
    $(document).unbind('keyup', escDocumentHandler)
  });


  // маски

  var phoneMask = IMask(phoneInputElement[0], {
    mask: '+{7} 000 000-00-00',
    placeholderChar: '_',
    lazy: false,
  });

  // Функция подсветки незаполненных полей

  var checkInputFirstName = function () {
    if (
      nameInputElement.val() != '' &&
      nameInputElement.val().length <= maxLength &&
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
        nameLastInputElement.val().length <= maxLength &&
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
        nameMiddleInputElement.val().length <= maxLength &&
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
    (mailInputElement.val().length <= maxLength) &&
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
        positionInputElement.val().length <= maxLength &&
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
      (companyInputElement.val().length <= maxLength) &&
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
          (siteInputElement.val().length <= maxLength)
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

    // подсказки при потере фокуса и изменении
    var showErrorName = function () {
      if (!(nameInputElement.val() != '')) {
        hideShowInvalideMsg(nameInputElement, createMsgInvalideEmpty('имя'), true)
        return false
      };
  
      if (!(nameInputElement.val().length <= maxLength)) {
        hideShowInvalideMsg(nameInputElement, createMsgInvalideLength(maxLength), true)
        return false
      };
  
      if (!nameInputElement.val().match(nameFormat)) {
        hideShowInvalideMsg(nameInputElement, createMsgInvalideName('имя'), true)
        return false
      };
      hideShowInvalideMsg(nameInputElement, '', false)
      return true
    }

    nameInputElement.on('focusout', showErrorName);
    nameInputElement.on('input keyup', showErrorName);
  
  
    var showErrorNameLast = function () {
        if (!(nameLastInputElement.val() != '')) {
      hideShowInvalideMsg(nameLastInputElement, createMsgInvalideEmpty('фамилию'), true)
      return false
    };
  
    if (!(nameLastInputElement.val().length <= maxLength)) {
      hideShowInvalideMsg(nameLastInputElement, createMsgInvalideLength(maxLength), true)
      return false
    };
  
    if (!nameLastInputElement.val().match(nameFormat)) {
      hideShowInvalideMsg(nameLastInputElement, createMsgInvalideName('фамилию'), true)
      return false
    };
    hideShowInvalideMsg(nameLastInputElement, '', false);
    return true
    };
    nameLastInputElement.on('focusout', showErrorNameLast);
    nameLastInputElement.on('input keyup', showErrorNameLast);
  
  
  
    var showErrorNameMiddle = function () {
      if(nameMiddleInputElement.val() === '') {
        hideShowInvalideMsg(nameMiddleInputElement, '', false)
        return true
      }
  
      if (!(nameMiddleInputElement.val().length <= maxLength)) {
        hideShowInvalideMsg(nameMiddleInputElement, createMsgInvalideLength(maxLength), true)
        return false
      }
  
      if (!nameMiddleInputElement.val().match(nameFormat)) {
        hideShowInvalideMsg(nameMiddleInputElement, createMsgInvalideName('отчество'), true)
        return false
      }
      hideShowInvalideMsg(nameMiddleInputElement, '', false)
      return true
    }
    nameMiddleInputElement.on('focusout', showErrorNameMiddle);
    nameMiddleInputElement.on('input keyup', showErrorNameMiddle);
  
  
  
    var showErrorMail = function () {
          if (!(mailInputElement.val() != '')) {
        hideShowInvalideMsg(mailInputElement, createMsgInvalideEmpty('е-мейл'), true);
        return false;
      }
  
      if (!(mailInputElement.val().length <= maxLength)) {
        hideShowInvalideMsg(mailInputElement, createMsgInvalideLength(maxLength), true);
        return false;
      };
  
      if (!mailInputElement.val().match(mailFormat)) {
        hideShowInvalideMsg(mailInputElement, invalideMailMsg, true);
        return false
      }
      hideShowInvalideMsg(mailInputElement, '', false)
      return true
    }
  
    mailInputElement.on('focusout', showErrorMail);
    mailInputElement.on('input keyup', showErrorMail);
  
  
  
    var showErrorPhone = function () {
          if (
        !(phoneInputElement.val().search('_') === -1) ||
        !(phoneInputElement.val() != '')
      ) {
        hideShowInvalideMsg(phoneInputElement, createMsgInvalideEmpty('телефон'), true);
        return false
      }
  
      if (!(phoneInputElement.val()[3] === '9')) {
        hideShowInvalideMsg(phoneInputElement, invalideTelMsg, true);
        return false;
      }
      hideShowInvalideMsg(phoneInputElement, '', false)
      return true;
    };
  
    phoneInputElement.on('focusout', showErrorPhone);
    phoneInputElement.on('input keyup', showErrorPhone);
  
  
  
    var showErrorPosition = function () {
          if (!(positionInputElement.val() != '')) {
        hideShowInvalideMsg(positionInputElement, createMsgInvalideEmpty('вашу должность'), true)
        return false
      }
  
      if (!(positionInputElement.val().length <= maxLength)) {
        hideShowInvalideMsg(positionInputElement, createMsgInvalideLength(maxLength), true)
        return false
      }
  
      if (!positionInputElement.val().match(nameFormat)) {
        hideShowInvalideMsg(positionInputElement, createMsgInvalideName('вашу должность'), true)
        return false
      }
      hideShowInvalideMsg(positionInputElement, '', false)
      return true
    };
  
    positionInputElement.on('focusout', showErrorPosition);
    positionInputElement.on('input keyup', showErrorPosition);
  
  
  
    var showErrorCompany = function () {
       if (!(companyInputElement.val() != '')) {
        hideShowInvalideMsg(companyInputElement, createMsgInvalideEmpty('название компании'), true)
        return false
      }
  
      if (!(companyInputElement.val().length <= maxLength)) {
        hideShowInvalideMsg(companyInputElement, createMsgInvalideLength(maxLength), true)
        return false
      }
  
      if (!(companyInputElement.val().indexOf('&') === companyInputElement.val().lastIndexOf('&'))) {
        hideShowInvalideMsg(companyInputElement, createMsgUniqueSymbol('&'), true)
        return false
      }
  
      if (!companyInputElement.val().match(companyFormat)) {
        hideShowInvalideMsg(companyInputElement, invalideCompanyMsg, true)
        return false
      }
      hideShowInvalideMsg(companyInputElement, '', false);
      return true
    };
  
    companyInputElement.on('focusout', showErrorCompany);
    companyInputElement.on('input keyup', showErrorCompany);
  
  
  
    var showErrorSite = function () {
      if(siteInputElement.val() === '') {
        hideShowInvalideMsg(siteInputElement, '', false)
        return true
      }
  
      if (!(siteInputElement.val().length <= maxLength)) {
        hideShowInvalideMsg(siteInputElement, createMsgInvalideLength(maxLength), true)
        return false
      }
  
      if (!siteInputElement.val().match(siteFormat)) {
        hideShowInvalideMsg(siteInputElement, invalideSiteMsg, true)
        return false
      }
      hideShowInvalideMsg(siteInputElement, '', false)
      return true
    };
  
    siteInputElement.on('focusout', showErrorSite);
    siteInputElement.on('input keyup', showErrorSite);

//   // подсказки при потере фокуса
//   var showErrorName = function () {
//     if (!(nameInputElement.val() != '')) {
//       hideShowInvalideMsg(nameInputElement, createMsgInvalideEmpty('имя'))
//       return false
//     };

//     if (!(nameInputElement.val().length <= 24)) {
//       hideShowInvalideMsg(nameInputElement, createMsgInvalideLength(24))
//       return false
//     };

//     if (!nameInputElement.val().match(nameFormat)) {
//       hideShowInvalideMsg(nameInputElement, createMsgInvalideName('имя'))
//       return false
//     };

//     return true
//   }

//   nameInputElement.on('focusout', showErrorName)


//   var showErrorNameLast = function () {
//       if (!(nameLastInputElement.val() != '')) {
//     hideShowInvalideMsg(nameLastInputElement, createMsgInvalideEmpty('фамилию'))
//     return false
//   };

//   if (!(nameLastInputElement.val().length <= 24)) {
//     hideShowInvalideMsg(nameLastInputElement, createMsgInvalideLength(24))
//     return false
//   }

//   if (!nameLastInputElement.val().match(nameFormat)) {
//     hideShowInvalideMsg(nameLastInputElement, createMsgInvalideName('фамилию'))
//     return false
//   }

//   return true
//   };

//  nameLastInputElement.on('focusout', showErrorNameLast);



//   var showErrorNameMiddle = function () {
//         if(nameMiddleInputElement.val() === '') {
//       return true
//     }

//     if (!(nameMiddleInputElement.val().length <= 24)) {
//       hideShowInvalideMsg(nameMiddleInputElement, createMsgInvalideLength(24))
//       return false
//     }

//     if (!nameMiddleInputElement.val().match(nameFormat)) {
//       hideShowInvalideMsg(nameMiddleInputElement, createMsgInvalideName('отчество'))
//       return false
//     }

//     return true
//   }

//   nameMiddleInputElement.on('focusout', showErrorNameMiddle)



//   var showErrorMail = function () {
//         if (!(mailInputElement.val() != '')) {
//       hideShowInvalideMsg(mailInputElement, createMsgInvalideEmpty('е-мейл'));
//       return false;
//     }

//     if (!(mailInputElement.val().length <= 24)) {
//       hideShowInvalideMsg(mailInputElement, createMsgInvalideLength(24));
//       return false;
//     };

//     if (!mailInputElement.val().match(mailFormat)) {
//       hideShowInvalideMsg(mailInputElement, invalideMailMsg);
//       return false
//     }
//     return true
//   }

//   mailInputElement.on('focusout', showErrorMail);



//   var showErrorPhone = function () {
//         if (
//       !(phoneInputElement.val().search('_') === -1) ||
//       !(phoneInputElement.val() != '')
//     ) {
//       hideShowInvalideMsg(phoneInputElement, createMsgInvalideEmpty('телефон'));
//       return false
//     }

//     if (!(phoneInputElement.val()[3] === '9')) {
//       hideShowInvalideMsg(phoneInputElement, invalideTelMsg);
//       return false;
//     }
//     return true;
//   };

//   phoneInputElement.on('focusout', showErrorPhone);



//   var showErrorPosition = function () {
//         if (!(positionInputElement.val() != '')) {
//       hideShowInvalideMsg(positionInputElement, createMsgInvalideEmpty('вашу должность'))
//       return false
//     }

//     if (!(positionInputElement.val().length <= 24)) {
//       hideShowInvalideMsg(positionInputElement, createMsgInvalideLength(24))
//       return false
//     }

//     if (!positionInputElement.val().match(nameFormat)) {
//       hideShowInvalideMsg(positionInputElement, createMsgInvalideName('вашу должность'))
//       return false
//     }

//     return true
//   };

//   positionInputElement.on('focusout', showErrorPosition);



//   var showErrorCompany = function () {
//      if (!(companyInputElement.val() != '')) {
//       hideShowInvalideMsg(companyInputElement, createMsgInvalideEmpty('название компании'))
//       return false
//     }

//     if (!(companyInputElement.val().length <= 24)) {
//       hideShowInvalideMsg(companyInputElement, createMsgInvalideLength(24))
//       return false
//     }

//     if (!(companyInputElement.val().indexOf('&') === companyInputElement.val().lastIndexOf('&'))) {
//       hideShowInvalideMsg(companyInputElement, createMsgUniqueSymbol('&'))
//       return false
//     }

//     if (!companyInputElement.val().match(companyFormat)) {
//       hideShowInvalideMsg(companyInputElement, invalideCompanyMsg)
//       return false
//     }

//     return true
//   };

//   companyInputElement.on('focusout', showErrorCompany);



//   var showErrorSite = function () {
//     if(siteInputElement.val() === '') {
//       return true
//     }

//     if (!(siteInputElement.val().length <= 24)) {
//       hideShowInvalideMsg(siteInputElement, createMsgInvalideLength(24))
//       return false
//     }

//     if (!siteInputElement.val().match(siteFormat)) {
//       hideShowInvalideMsg(siteInputElement, invalideSiteMsg)
//       return false
//     }

//     return true
//   };

//   siteInputElement.on('focusout', showErrorSite);

  var escDocumentHandler = function (evt) {
    if(evt.keyCode == 13){
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

  // $(document).bind('keyup', escDocumentHandler);
  // $(document).unbind('keyup', escDocumentHandler)

});