'use strict';
(function () {
// кастомные селекты

var choiceLang = new Choices('.expert-one .menu__lang', {
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
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).children('.speaker__favourites-text').text('В избранное')
  } else {
    $(this).addClass('active');
    $(this).children('.speaker__favourites-text').text('В избранном')
  }
})

})();