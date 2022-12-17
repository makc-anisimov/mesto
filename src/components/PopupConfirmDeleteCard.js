import { Popup } from "./Popup.js";

export class PopupConfirmDeleteCard extends Popup {
  constructor(selectorPopup, handleSubmitForm) {
    super(selectorPopup);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._handleSubmitForm = handleSubmitForm;
    this._saveButton = this._popupForm.querySelector('.popup__save-button');
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.buttonTextLoading();
      this._handleSubmitForm(this._idDeletedCard);
    });
  }

  open(id) {
    this._idDeletedCard = id;
    super.open();
  }

  buttonTextLoading() {
    this._saveButtonText = this._saveButton.textContent;
    this._saveButton.textContent = 'Сохранение...'
  }

  buttonTextSave() {
    this._saveButton.textContent = this._saveButtonText
  }

}
