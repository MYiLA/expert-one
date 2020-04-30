'use strict';
(function () {

  // инициализация кастомных селектов в цикле
  var findAncestor = function (el, selector) {
    while ((el = el.parentElement) && !el.matches(selector));
    return el;
  }

  var choiceDefoltSelect = function (el, value) {
    var div = findAncestor(el, '.expert-one .client-order');
    if (
      div.classList.contains('new') &&
      value === 'Новый') {
      return true
    }
    if (
      div.classList.contains('work') &&
      value === 'В работе') {
      return true
    }
    if (
      div.classList.contains('realized') &&
      value === 'Реализован') {
      return true
    }
    if (
      div.classList.contains('unrealized') &&
      value === 'Нереализован') {
      return true
    } else
      return false
  }

  var choiceClientOrders = $('.expert-one .client-order__select');
  choiceClientOrders.each(function (i) {
    var element = $(this)[0];
    new Choices(element, {
      searchChoices: false,
      shouldSort: true,
      position: 'bottom',
      itemSelectText: '',
      sorter: function () {
        return true
      },
      // дефолт-значение
      choices: [{
          value: 'Новый',
          selected: choiceDefoltSelect(element, 'Новый'),
        },
        {
          value: 'В работе',
          selected: choiceDefoltSelect(element, 'В работе'),
        },
        {
          value: 'Реализован',
          selected: choiceDefoltSelect(element, 'Реализован'),
        },
        {
          value: 'Нереализован',
          selected: choiceDefoltSelect(element, 'Нереализован'),
        }
      ]
    });

    // присвоение типов
    element.addEventListener('addItem', function (event) {
      $(this).parents('.client-order').removeClass(['unrealized', 'new', 'work', 'realized']);

      if (event.detail.value === 'Нереализован') {
        $(this).parents('.client-order').addClass('unrealized');
      }
      if (event.detail.value === 'Новый') {
        $(this).parents('.client-order').addClass('new');
      }
      if (event.detail.value === 'В работе') {
        $(this).parents('.client-order').addClass('work');
      }
      if (event.detail.value === 'Реализован') {
        $(this).parents('.client-order').addClass('realized');
      }
    })
  });

  // открытие/закрытие фильтров на мобильном

  var filterOrder = $('.expert-one .filter-clients__wrap-checkbox');

  var openPopup = function (element) {
    element.addClass('active')
    $('.expert-one').addClass('no-scroll');
    setTimeout(function () {
      element.removeClass('dissolve');
    }, 10);
  }

  var closePopup = function (element) {
    setTimeout(function () {
      element.addClass('dissolve');
    }, 0);

    setTimeout(function () {
      element.removeClass('active');
      $('.expert-one').removeClass('no-scroll');
    }, 400);
  }

  $('.expert-one .filter-clients__open').on('click', function () {
    openPopup(filterOrder)
  });

  $('.expert-one .filter-clients__close-popup').on('click', function () {
    closePopup(filterOrder)
  });

  //развернуть список спикеров

  // .client-order__wrap-speaker max-height = max-content

  $('.expert-one .speaker-link__expand').each(function (i) {
    $(this).on('click', function () {
      $(this).parents('.client-order__wrap-speaker').css({
        'max-height': '500px',
      })

      $(this).addClass('dissolve');

      // свернуть список спикеров (клик вне блока).client-order

      // $(document).mouseup(function (e){ // событие клика по веб-документу
      // 	var div = $("#popup"); // тут указываем ID элемента
      // 	if (!div.is(e.target) // если клик был не по нашему блоку
      // 	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
      // 		div.hide(); // скрываем его
      //   }
      // })

      // var div = $(this).parents('.client-order');

      // $(document).mouseup(function (e, div) {

      //   if (!div.is(e.target) // если клик был не по нашему блоку
      //     &&
      //     div.has(e.target).length === 0) { // и не по его дочерним элементам
      //     console.log($(this)) 
      //   }
      // });
    })
  })
})();