import { handleOpenPhotoPopup } from "./utils.js";

export class Card {
  constructor(dataCard, nameTemplateSelector) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._templateElement = document.querySelector(nameTemplateSelector).content;
    this._card = this._templateElement.cloneNode(true); // из темплейта создаем шаблон карточки.
    this._cardPhoto = this._card.querySelector('.element__photo'); //фото в карточке
    this._cardTitle = this._card.querySelector('.element__title');  //название места
    this._cardLikeButton = this._card.querySelector('.element__like'); //ищем  кнопку like
    this._cardRemoveButton = this._card.querySelector('.element__delete-button');
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
    const removedCard = this._cardRemoveButton.closest('.element');
    removedCard.remove();
    // this._card.remove();
  }

  _handleOpenPhoto() {
    handleOpenPhotoPopup(this._name, this._link);
  }

  getRenderedCard() {
    this._cardTitle.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._setEventListeners();
    return this._card;
  }
}
