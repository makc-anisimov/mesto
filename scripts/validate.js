
function showInputError (input, nameInputFormErrorClass) {
  input.classList.add(nameInputFormErrorClass);
}

function hideInputError (input, nameInputFormErrorClass) {
  input.classList.remove(nameInputFormErrorClass);
}

function isValid(input, nameInputFormErrorClass) {
  const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
  errorSpan.textContent = input.validationMessage;
  if (!input.validity.valid) {
    showInputError(input, nameInputFormErrorClass)
  }
  else  hideInputError(input, nameInputFormErrorClass)
}

function enableValidation(settings) {
  const popupFormList = document.querySelectorAll(settings.formSelector); //список всех форм
  popupFormList.forEach(function (element) {
    element.addEventListener('input', (evt) => {
      const currentForm = evt.currentTarget;
      isValid(evt.target, settings.inputErrorClass);
      checkButtonOpenPopup(currentForm);
    });
  }, settings)
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-form',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input-form_error',
  errorClass: '.popup__error_visible'
});
