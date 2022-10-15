
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-form',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: '.popup__save-button_disabled',
  inputErrorClass: 'popup__input-form_error',
  errorClass: '.popup__error_visible'
});
