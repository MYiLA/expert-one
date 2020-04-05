'use strict';

// кастомные селекты

const choiceLang = new Choices('.expert-one .menu__lang', {
  searchChoices: false,
  shouldSort: false,
  sorter: function() {
   return false
 }
});

//открыть/закрыть меню

$('.expert-one .header__burger').on('click', function () {
  $('.expert-one .header').toggleClass('active');
  $('.expert-one').toggleClass('no-scroll');
})

// избранное. смена вида кнопки

$('.expert-one .speaker__favourites').on('click', function () {
  $(this).toggleClass('active');
})