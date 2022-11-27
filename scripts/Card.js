// import { handleOpenPhotoPopup } from "./utils.js";

export class Card {
  constructor(dataCard, nameTemplateSelector, handleCardClick) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._card = document.querySelector(nameTemplateSelector).content.querySelector('.element').cloneNode(true);
    this._cardPhoto = this._card.querySelector('.element__photo');
    this._cardTitle = this._card.querySelector('.element__title');
    this._cardLikeButton = this._card.querySelector('.element__like');
    this._cardRemoveButton = this._card.querySelector('.element__delete-button');
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => { this._handleLikePhoto() });
    this._cardRemoveButton.addEventListener('click', () => { this._handleRemovePhoto() });
    this._cardPhoto.addEventListener('click', () => { this._handleOpenPhoto() });
  }

  _handleLikePhoto() {
    this._cardLikeButton.classList.toggle('element__like_active');
  }

  _handleRemovePhoto() {
    this._card.remove();
  }

  _handleOpenPhoto() {
    this._handleCardClick({
      name: this._name,
      link: this._link
    });
  }

  getRenderedCard() {
    this._cardTitle.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._setEventListeners();
    return this._card;
  }
}
