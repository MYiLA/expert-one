'use strict';
(function () {

// кастомные селекты
var choiceFilterLang = new Choices('.expert-one .filter__select--lang', {
  searchChoices: false,
  shouldSort: true,
  sorter: function() {
   return true
 }
});

var choiceFilterCountry = new Choices('.expert-one .filter__select--country', {
  searchChoices: false,
  shouldSort: true,
  sorter: function() {
   return true
 }
});

// открыть/закрыть фильтр

$('.expert-one .filter__open').on('click', function () {
  $('.expert-one .filter__popup').addClass('active');
  $('.expert-one').addClass('no-scroll');
})

$('.expert-one .filter__close').on('click', function () {
  $('.expert-one .filter__popup').removeClass('active');
  $('.expert-one').removeClass('no-scroll');
})

// избранное. смена вида кнопки

$('.expert-one .speaker__favourites').on('click', function () {
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).children('.speaker__favourites-text').text('В избранное');
    $(this).children('.speaker__favourites-icon').css({
      'background-image': 'url(./img/heart-gray.svg)',
    });
    
  } else {
    $(this).addClass('active');
    $(this).children('.speaker__favourites-text').text('В избранном');
    $(this).children('.speaker__favourites-icon').css({
      'background-image': 'url(./img/heart-full.svg)',
    });
  }
})

})();