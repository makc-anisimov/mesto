import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selectorPopup, handleSubmitForm) {
    super(selectorPopup);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._handleSubmitForm = handleSubmitForm;
    this._inputList = this._popupForm.querySelectorAll('.popup__input-form');
    this._saveButton = this._popupForm.querySelector('.popup__save-button');
  }

  _getInputValues() {
    this._inputValues = {}
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmitForm = newSubmitHandler
  }

  setInputValues(dataForm) {
    this._inputList.forEach(input => {
      input.value = dataForm[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.buttonTextLoading();
      // debugger
      this._handleSubmitForm(this._getInputValues());
      this.buttonTextSave();
      this.close();
    });
  }
  resetForm() {
    this._popupForm.reset();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  buttonTextLoading() {
    this._saveButtonText = this._saveButton.textContent;
    this._saveButton.textContent = 'Сохранение...'
    // console.log('this._saveButtonText', this._saveButtonText)
    // console.log('this._saveButton.textContent', this._saveButton.textContent);

  }

  buttonTextSave() {
    this._saveButton.textContent = this._saveButtonText
    // console.log('this._saveButton.textContent', this._saveButton.textContent);
  }

}
