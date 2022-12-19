import { Popup } from "./Popup.js";

export class PopupConfirmDeleteCard extends Popup {
  constructor(selectorPopup, handleSubmitForm) {
    super(selectorPopup);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._handleSubmitForm = handleSubmitForm;
    this._saveButton = this._popupForm.querySelector('.popup__save-button');
    this._saveButtonText = this._saveButton.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.buttonTextLoading();
      this._handleSubmitForm(this._idDeletedCard, this._deletedCard);
    });
  }

  open(id, card) {
    this._idDeletedCard = id;
    this._deletedCard = card;
    super.open();
  }

  buttonTextLoading() {
    this._saveButton.textContent = 'Сохранение...'
  }

  buttonTextSave() {
    this._saveButton.textContent = this._saveButtonText
  }

}
