
function showInputError(input, nameInputFormErrorClass) {
  const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
  errorSpan.textContent = input.validationMessage;
  input.classList.add(nameInputFormErrorClass);
}

function hideInputError(input, nameInputFormErrorClass) {
  const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
  errorSpan.textContent = "";
  input.classList.remove(nameInputFormErrorClass);
}

function isValid(input, nameInputFormErrorClass) {
  if (!input.validity.valid) {
    showInputError(input, nameInputFormErrorClass)
  }
  else hideInputError(input, nameInputFormErrorClass)
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

function eraseForm(popup) {
  const currentForm = popup.querySelector('.popup__form');
  resetForm(currentForm);
  currentForm.querySelectorAll('.popup__error_visible').forEach(function (span) {
    span.textContent = "";
  })
  currentForm.querySelectorAll('.popup__input-form').forEach(function (input) {
    hideInputError(input, 'popup__input-form_error');
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-form',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input-form_error',
  errorClass: '.popup__error_visible'
});
