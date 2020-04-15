// кастомные селекты

// import { template } from "babel-core";

const choiceAuthClient = new Choices('.form-auth__select--client', {
  searchChoices: false,
  shouldSort: true,
  sorter: function() {
   return true
 }
});

const choiceAuthExpensiveSpeaker = new Choices('.form-auth__select--expensive-speaker', {
  searchChoices: false,
  shouldSort: true,
  sorter: function() {
   return true
 }
});

const choiceAuthDepartment = new Choices('.form-auth__select--event-department', {
  searchChoices: false,
  shouldSort: true,
  sorter: function() {
   return true
 }
});

const choiceAuthExternalConf= new Choices('.form-auth__select--external-conference', {
  searchChoices: false,
  shouldSort: true,
  sorter: function() {
   return true
 }
});

const choiceAuthFieldConf = new Choices('.form-auth__select--field-conference', {
  searchChoices: false,
  shouldSort: true,
  sorter: function() {
   return true
 }
});

// маски для формы

const formAuthElement = document.querySelector('.form-auth__form');
const nameInputElement = formAuthElement.querySelector('#auth-first-name');
const phoneInputElement = formAuthElement.querySelector('#auth-tel');

const nameMask = IMask(nameInputElement, {
  mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/,
});

const phoneMask = IMask(phoneInputElement, {
  mask: '+{7} 000 000-00-00',
  placeholderChar: '_',
  lazy: false,
});


// вход через вк (показ/скрытие элементов)

$('.expert-one .social-enter__link').on('click', function () {
  $('.expert-one .social-enter').removeClass('active');
  $('.expert-one .user-profile').addClass('active');
  // $('.expert-one').toggleClass('no-scroll');
})

const closePopupAuth = function() {
  $('.expert-one .popup-auth--auth').removeClass('active');
  $('.expert-one .auth').removeClass('signin');
  $('.expert-one .auth').removeClass('signup');
  $('.expert-one .user-profile').removeClass('active');
}

const openPopupAuth = function() {
  $('.expert-one .social-enter').addClass('active');
  $('.expert-one .popup-auth--auth').addClass('active');
}

$('.expert-one .auth__btn--signin').on('click', function () {
  closePopupAuth()
})

$('.expert-one .auth__close').on('click', function () {
  closePopupAuth()
})

// временные кнопки template

$('.expert-one .expert-one_btn--signin').on('click', function () {
  openPopupAuth();
  $('.expert-one .auth').addClass('signin');
  $('.expert-one .auth__title').text('Авторизация');
   
})

$('.expert-one .expert-one_btn--signup').on('click', function () {
  openPopupAuth();
  $('.expert-one .auth').addClass('signup');
  $('.expert-one .auth__title').text('Регистрация');
})

// открыть форму

$('.expert-one .auth__btn--signup').on('click', function () {
  $('.expert-one .popup-auth--form').addClass('active');
})

// вернуться
$('.expert-one .form-auth__btn-back').on('click', function () {
  $('.expert-one .popup-auth--form').removeClass('active');
})

$('.expert-one .form-auth__close').on('click', function () {
  closePopupAuth()
  $('.expert-one .popup-auth--form').removeClass('active');
})


// отправка формы
$('.expert-one .form-auth__submit').on('click', function () {
  event.preventDefault();
  closePopupAuth()
  $('.expert-one .popup-auth--form').removeClass('active');
  $('.expert-one .popup-auth--thanks').addClass('active');
})

$('.expert-one .thanks__close').on('click', function () {
  $('.expert-one .popup-auth--thanks').removeClass('active');
})