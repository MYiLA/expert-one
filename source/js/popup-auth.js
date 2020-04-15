// кастомные селекты

// import { template } from "babel-core";

const choiceAuthClient = new Choices('.form-auth__select--client', {
  searchChoices: false,
  shouldSort: true,
  sorter: function () {
    return true
  }
});

const choiceAuthExpensiveSpeaker = new Choices('.form-auth__select--expensive-speaker', {
  searchChoices: false,
  shouldSort: true,
  sorter: function () {
    return true
  }
});

const choiceAuthDepartment = new Choices('.form-auth__select--event-department', {
  searchChoices: false,
  shouldSort: true,
  sorter: function () {
    return true
  }
});

const choiceAuthExternalConf = new Choices('.form-auth__select--external-conference', {
  searchChoices: false,
  shouldSort: true,
  sorter: function () {
    return true
  }
});

const choiceAuthFieldConf = new Choices('.form-auth__select--field-conference', {
  searchChoices: false,
  shouldSort: true,
  sorter: function () {
    return true
  }
});

// маски для формы

const formAuthElement = document.querySelector('.form-auth__form');
const nameInputElement = formAuthElement.querySelector('#auth-first-name');
const phoneInputElement = formAuthElement.querySelector('#auth-tel');
const speakerNumInputElement = formAuthElement.querySelector('#auth-speakers-num');

const nameMask = IMask(nameInputElement, {
  mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/,
});

const phoneMask = IMask(phoneInputElement, {
  mask: '+{7} 000 000-00-00',
  placeholderChar: '_',
  lazy: false,
});

var numberMask = IMask(speakerNumInputElement, {
  mask: Number, // enable number mask

  // other options are optional with defaults below
  scale: 0, // digits after point, 0 for integers
  signed: true, // disallow negative
  thousandsSeparator: '', // any single char
  padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
  normalizeZeros: false, // appends or removes zeros at ends
  // radix: ',',  // fractional delimiter
  // mapToRadix: ['.']  // symbols to process as radix

  // additional number interval options (e.g.)
  min: 0,
  max: 10000
});

// вход через вк (показ/скрытие элементов)
const closeSocialEnter = function () {
    $('.expert-one .social-enter').addClass('dissolve');
    $('.expert-one .social-enter').removeClass('active')
}

const openSocialEnter = function () {
  $('.expert-one .social-enter').addClass('active')
  setTimeout(function () {
    $('.expert-one .social-enter').removeClass('dissolve');
  }, 10);
}

const openUserProfile = function () {
  $('.expert-one .user-profile').addClass('active');
  setTimeout(function () {
    $('.expert-one .user-profile').removeClass('dissolve');
  }, 10);
}

const closeUserProfile = function () {
    $('.expert-one .user-profile').addClass('dissolve');
    $('.expert-one .user-profile').removeClass('active');
}

$('.expert-one .social-enter__link').on('click', function () {
  closeSocialEnter();
  openUserProfile();
})

$('.form-auth__input--mask').on('focus', function () {
  $(this).addClass('active')
})

// функции закрытия попапов
const closePopupAuth = function () {
  setTimeout(function () {
    $('.expert-one .popup-auth--auth').addClass('dissolve');
  }, 0);

  setTimeout(function () {
    $('.expert-one .popup-auth--auth').removeClass('active');
    $('.expert-one .auth').removeClass('signin');
    $('.expert-one .auth').removeClass('signup');
    closeUserProfile();
  }, 400)
}

const closeAuthForm = function () {
  setTimeout(function () {
    $('.expert-one .popup-auth--form').addClass('dissolve');
  }, 0);

  setTimeout(function () {
    $('.expert-one .popup-auth--form').removeClass('active');
  }, 400)
}

const closePopupThanks = function () {
  setTimeout(function () {
    $('.expert-one .popup-auth--thanks').addClass('dissolve');
  }, 0);

  setTimeout(function () {
    $('.expert-one .popup-auth--thanks').removeClass('active');
  }, 400);
}


// функции открытия попапов

const openPopupAuth = function () {
  $('.expert-one .popup-auth--auth').addClass('active');
  openSocialEnter();
  setTimeout(function () {
    $('.expert-one .popup-auth--auth').removeClass('dissolve');
  }, 10);
}

const openAuthForm = function () {
  $('.expert-one .popup-auth--form').addClass('active');
  setTimeout(function () {
    $('.expert-one .popup-auth--form').removeClass('dissolve');
  }, 10);
}

const openPopupThanks = function () {
  closePopupAuth();
  closeAuthForm();
  $('.expert-one .popup-auth--thanks').addClass('active');
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

// временные кнопки template
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







// проверка заполненности обязательных полей
// проверять перед открытием попапа(так как могли данные подгрузиться)
let isRequiredFilled = true;

// пример
// const validationTel = function (input) {
//   if (input[0].value.length !== 17) {
//       input.parent().addClass('invalid');
//       alert('Пожалуйста введите телефон');
//       return
//   } else {
//       input.parent().removeClass('invalid')
//   }
// }
// $('#tel-popup').on('focusout', function () {
//   validationTel($('#tel-popup'))
// })
// проверка когда убирается фокус с поля инпута
if (isRequiredFilled) {
  $('.form-auth__submit').addClass('active');
} else {
  $('.form-auth__submit').removeClass('active');
}


// проверка валидации

let isValide = true;
// отправка формы

$('.expert-one .form-auth__submit').on('click', function (evt) {
  evt.preventDefault();
  if (isValide) {
    $('.form-auth__submit').removeClass('active');

    // аджакс-запрос. если ок - то попап "спасибо"
    // openPopupThanks();

  } else return
})


// закрыть попап "спасибо"

$('.expert-one .thanks__close').on('click', function () {
  closePopupThanks()
})