
export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._buttonSaveForm = this._form.querySelector(this._submitButtonSelector);
  }

  _showInputError(input) {
    input.classList.add(this._inputErrorClass);
    this._form.querySelector(`#${input.id}-error`).textContent = input.validationMessage;
  }

  _hideInputError(input) {
    input.classList.remove(this._inputErrorClass);
    this._form.querySelector(`#${input.id}-error`).textContent = "";
  }

  _isValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    }
    else this._hideInputError(input);
  }

  _disableButton() {
    this._buttonSaveForm.setAttribute('disabled', true);
    this._buttonSaveForm.classList.add(this._inactiveButtonClass);
  }

  _enableButton() {
    this._buttonSaveForm.removeAttribute('disabled');
    this._buttonSaveForm.classList.remove(this._inactiveButtonClass);
  }

  checkButtonOpen() {
    if (this._form.checkValidity()) {
      this._enableButton();
    }
    else {
      this._disableButton();
    }
  }

   eraseForm() {
    this._form.reset();
    this._form.querySelectorAll(this._errorClass).forEach((span) => {
      span.textContent = "";
    })
    this._form.querySelectorAll(this._inputSelector).forEach((input) => {
      this._hideInputError(input);
    })
  }

  enableValidation() {
    this._form.addEventListener('input', (evt) => {
      this._isValid(evt.target);
      this.checkButtonOpen();
    });
  }
}
