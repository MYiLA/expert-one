// кастомные селекты

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
