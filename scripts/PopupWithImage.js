import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupPhoto = this._popup.querySelector('.popup__photo-opened');
    this._popupTitle = this._popup.querySelector('.popup__photo-title');
  }

  open({ name, link }) {
    this._popupTitle.textContent = name;
    this._popupPhoto.src = link;
    this._popupPhoto.alt = name;
    super.open();
  }
}
