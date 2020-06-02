'use strict';
$(document).ready
(function () {
// свернуть/развернуть биографию
$('.expert-one .biography__btn-collapse').on('click', function () {
  
  if($(this).parent().hasClass('active')) {
    $(this).parent().removeClass('active');
    $(this).siblings('.detailText').css({
      'display': 'none'
    });
  } else {
    $(this).parent().addClass('active');
    $(this).siblings('.detailText').css({
      'display': 'block'
    });
  }
})

//открыть видео 

$('.expert-one .video__play').on('click', function () {
  $(this).parent().parent().addClass('active');
})

// избранное. смена вида кнопки

$('.expert-one .speaker__favourites').on('click', function () {
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).children('.speaker__favourites-text').text('В избранное');

  } else {
    $(this).addClass('active');
    $(this).children('.speaker__favourites-text').text('В избранном');
  }
})









// var sliderWrap = $('.expert-one .video__glide');

// var videoSlider = new Glide(sliderWrap[0], {
//   type: 'carousel',
//   startAt: 0,
//   perView: 3,
//   gap: 30,
//   autoplay: 5000,
//   hoverpause: true,
//   animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
//   dragThreshold: 50,
//   animationDuration: 1000,
//   breakpoints: {
//     1220: {
//       perView: 2
//     },
//     820: {
//       perView: 1
//     }
//   },
// });

// var destroySlider = function (wrap, slider) {
//   slider.destroy();
//   wrap.addClass('disabled');
// }

// // проверка кол-ва слайдов .glide__slide внутри .expert-one .video__glide

// var initSlider = function (slideCount) {

//   sliderWrap.find('.video__item-wrap').length > slideCount ?
//     videoSlider.mount() :
//     destroySlider($('.video__glide'), videoSlider);
// }

// // зависимость от ширины экрана (адаптив)

// $(document).ready(function () {

//   if ($(document).width() >= 1220) {
//     initSlider(3);
//   } else if ($(document).width() >= 820) {
//     initSlider(2);
//   } else {
//     initSlider(1);
//   };

// })

})();