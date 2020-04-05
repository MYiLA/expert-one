// кастомные селекты

const choiceFilterLang = new Choices('.expert-one .filter__select--lang', {
  searchChoices: false,
  shouldSort: true,
  sorter: function() {
   return true
 }
});

const choiceFilterCountry = new Choices('.expert-one .filter__select--country', {
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