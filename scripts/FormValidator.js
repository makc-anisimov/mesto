
export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  enableValidation() {
    this._form.addEventListener('input', (evt) => {
      this._activeInput = evt.target;
      this._activeSpan = this._activeInput.parentNode.querySelector(`#${this._activeInput.id}-error`);
      this._isValid(evt.target);
      this.checkButtonOpen();
    });
  }

  _isValid() {
    if (!this._activeInput.validity.valid) {
      this._showInputError();
    }
    else this._hideInputError()
  }

  _showInputError() {
    this._activeSpan.textContent = this._activeInput.validationMessage;
    this._activeInput.classList.add(this._inputErrorClass);
  }

  _hideInputError() {
    this._activeSpan.textContent = "";
    this._activeInput.classList.remove(this._inputErrorClass);
  }

  checkButtonOpen() {
    this._buttonSaveForm = this._form.querySelector(this._submitButtonSelector); // кладем кнопку сохр. в перем
    if (this._form.checkValidity()) {
      this._enableButton();
    }
    else {
      this._disableButton();
    }
  }

  _disableButton() {
    this._buttonSaveForm.setAttribute('disabled', true);
    this._buttonSaveForm.classList.add(this._inactiveButtonClass);
  }
  _enableButton() {
    this._buttonSaveForm.removeAttribute('disabled');
    this._buttonSaveForm.classList.remove(this._inactiveButtonClass);
  }
}
