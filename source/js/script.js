'use strict';
// кастомные селекты

const choiceLanguage = new Choices('.expert-one .menu__language', {
  searchChoices: false,
  shouldSort: false,
  sorter: function() {
   return false
 }
});

//открыть/закрыть меню

$('.expert-one .header__burger').on('click', function () {
  $('.expert-one .header').toggleClass('header--open');
})