'use strict';
(function () {
  var customerWrapElement = $('.expert-one .customer-data__wrap-main');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  var invalidTime = 4000;

//инпуты и кнопка
  var btnElement = customerWrapElement.find('.customer-data__btn--save');
  var telInputElement = customerWrapElement.find('.contacts__link--tel + .input-wrap .input-wrap__input');
  var mailInputElement = customerWrapElement.find('.contacts__link--mail + .input-wrap .input-wrap__input');
  var nameInputElement = customerWrapElement.find('.customer-data__wrap-title + .input-wrap .input-wrap__input');
  var siteInputElement = customerWrapElement.find('.contacts__link--site + .input-wrap .input-wrap__input');

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

  // var nameMask = IMask(nameInputElement[0], {
  //   mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\.]{1,20}$/,
  // });

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

  siteInputElement.on('focusout', function () {
    if (siteInputElement.hasClass('js__empty-field')) {
      siteInputElement.css({
        'border-color': '#eb5757'
      });

      setTimeout(function () {
        siteInputElement.removeAttr('style');
      }, invalidTime);
    };
  });

  // функции проверки.

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

  var checkInputWebsite = function () {
    if (
      (siteInputElement.val() === '') ||
      (siteInputElement.val().match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/))) {
        siteInputElement.removeClass('js__empty-field');
      }
     else 
     siteInputElement.addClass('js__empty-field');
  }

  var isRequiredFilled = false;

  // Проверка в режиме реального времени
  setInterval(function () {
    // Запускаем функцию проверки полей на заполненность
    checkInputMail(mailInputElement);
    checkInputTel(telInputElement);
    checkInputWebsite();

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

})();