'use strict';
(function () {
  $('.expert-one .customer-data__btn--edit').on('click', function () {
    $('.expert-one .customer-data__wrap-main').addClass('edit');
  });

  $('.expert-one .customer-data__btn--save').on('click', function () {
    $('.expert-one .customer-data__wrap-main').removeClass('edit');
  });
})();