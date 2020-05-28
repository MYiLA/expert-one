'use strict';
(function () {
  var customerWrapElement = $('.expert-one .customer-data__wrap-main');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  var invalidTime = 4000;

//инпуты и кнопка
  var btnElement = customerWrapElement.find('.customer-data__btn--save');
  var telInputElement = customerWrapElement.find('.contacts__link--tel + .input-wrap .input-wrap__input');
  var mailInputElement = customerWrapElement.find('.contacts__link--mail + .input-wrap .input-wrap__input');

//сообщения об ошибке
  var mailInvalidMessage = mailInputElement.siblings('.input-wrap__invalid-message');
  var telInvalidMessage = telInputElement.siblings('.input-wrap__invalid-message');
  var btnInvalidMessage = btnElement.siblings('.customer-data__invalid-message');

  //открыть и закрыть редактирование
  $('.expert-one .customer-data__btn--edit').on('click', function () {
    $('.expert-one .customer-data__wrap-main').addClass('edit');
  });

  $('.expert-one .customer-data__btn--save').on('click', function () {
    $('.expert-one .customer-data__wrap-main').removeClass('edit');
  });

// после закрытия сбросить введенные значения?


  // маски

  var phoneMask = IMask(telInputElement[0], {
    mask: '+{7} 000 000-00-00',
    placeholderChar: '_',
    lazy: false,
  });

  // Функция подсветки незаполненных полей
  var lightEmpty = function () {
    customerWrapElement.find('.js__empty-field').css({
      'border-color': '#eb5757'
    });
    setTimeout(function () {
      form.find('.js__empty-field').removeAttr('style');
    }, invalidTime);
  }

  // функции проверки емейла и телефона.

  var addMessageInInput = function (input, message) {
    console.log(message);
    input.addClass('js__empty-field');
    if (message) {
      message.addClass('active');
      setTimeout(function () {
        message.removeClass('active');
      }, invalidTime);
    }
  }



  var checkInputMail = function (mail, message) {
    console.log(message);
    mail.val().match(mailformat)
    ||
    mail.val() === ''
    ?
    mail.removeClass('js__empty-field')
    : 
    addMessageInInput(mail, message);
  }

  var checkInputTel = function (tel, message) {
    (
      (tel.val().search('_') === -1)
      &&
      (tel.val()[3] === '9')
    ) 
    ||
    (tel.val() === '+7 ___ ___-__-__')
    ? 
    tel.removeClass('js__empty-field')
    :
    addMessageInInput(tel, message)
  }

  var isRequiredFilled = false;

  // Проверка в режиме реального времени
  setInterval(function () {
    // Запускаем функцию проверки полей на заполненность
    checkInputMail(mailInputElement);
    checkInputTel(telInputElement);

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

    // подсказка для емейла и телефона по потере фокуса
    mailInputElement.on('focusout', function() {
      checkInputMail(mailInputElement,  mailInvalidMessage);
    });

    telInputElement.on('focusout', function() {
      checkInputTel(telInputElement, telInvalidMessage)
    });

    // // учесть isRequiredFilled = true
    // var isValide = function () {
    //   var tel = telIsValide();
    //   var mail = mailIsValide();
    //   return tel && mail;
    // };
  
  
    // // отправка формы
    // var formSubmit = function(evt) {
    //   evt.preventDefault();
  
    //   if (isValide() && isRequiredFilled) {
    //     form.find('.form-auth__submit').css({
    //       'cursor': 'auto',
    //       'background-color': '#888888',
    //       'pointer-event': 'auto',
    //     });
    //     setTimeout(function () {
    //       form.find('.form-auth__submit').removeAttr('style');
    //     }, 5000);
  
    //     setTimeout(openPopupThanks, 1000);
    //   } else {
    //     lightEmpty();
    //   }
    // }
  
    // $('.expert-one .form-auth__submit').on('click', function (evt) {
    //   formSubmit(evt)
    // });
  
    // form.on('submit', function (evt) {
    //   formSubmit(evt)
    // });

})();