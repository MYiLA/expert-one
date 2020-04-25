(function () {

  // инициализация кастомных селектов в цикле

  var choiceClientOrders = $('.expert-one .client-order__select');
  choiceClientOrders.each(function (i) {
    new Choices($(this)[0], {
      searchChoices: false,
      shouldSort: true,
      sorter: function () {
        return true
      }
    });
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

  console.log($('[data-value="Нереализован"]'));
  // присвоение и изменение статуса с помощью активного фильтра
  // актуальный фильтр

  // делегирование (клик по кнопкам) выбрать по data-value:
  // data-value="Новый"          new
  // data-value="Нереализован"   unrealized
  // data-value="В работе"       work
  // data-value="Реализован"     realized

  // при клике по кнопкам выше - добавить класс (///) для родителя client-order

  // при первом запуске все новое.

})();