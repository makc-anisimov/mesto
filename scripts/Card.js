import { handleOpenPhotoPopup } from "./utils.js";

export class Card {
  constructor(dataCard, template) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this.template = template;
  }

  _setEventListeners() {
    const currentCard = this._renderedCard;
    const cardLikeButton = currentCard.querySelector('.element__like'); //ищем  кнопку like

    cardLikeButton.addEventListener('click', () => {
      cardLikeButton.classList.toggle('element__like_active');   // по клику выполняем смену лайка
    });

    const cardRemoveButton = currentCard.querySelector('.element__delete-button');
    cardRemoveButton.addEventListener('click', () => {
      const removedCard = cardRemoveButton.closest('.element');
      removedCard.remove();
    });

    this._renderedCard.querySelector('.element__photo').addEventListener('click', () => {
      this._handleOpenPhoto();
    });
  }

  _handleOpenPhoto() {
    handleOpenPhotoPopup(this._name, this._link);
  }

  getRenderedCard() {
    const card = this.template.cloneNode(true); // из темплейта создаем шаблон карточки.
    const cardPhoto = card.querySelector('.element__photo'); //фото в карточке
    const cardTitle = card.querySelector('.element__title');  //название места
    cardTitle.textContent = this._name;
    cardPhoto.src = this._link;
    cardPhoto.alt = this._name;
    this._renderedCard = card;
    this._setEventListeners();
    return card;
  }
}
