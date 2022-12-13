
export class Card {
  constructor(dataCard, nameTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._likes = dataCard.likes;
    this._id = dataCard.id;
    this._userId = dataCard.userId
    this._ownerId = dataCard.ownerId
    this._card = document.querySelector(nameTemplateSelector).content.querySelector('.element').cloneNode(true);
    this._cardPhoto = this._card.querySelector('.element__photo');
    this._cardTitle = this._card.querySelector('.element__title');
    this._cardLikeButton = this._card.querySelector('.element__like');
    this._cardRemoveButton = this._card.querySelector('.element__delete-button');
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => { this._handleLikeClick(this._id) });
    this._cardRemoveButton.addEventListener('click', () => { this._handleDeleteClick(this._id) });
    this._cardPhoto.addEventListener('click', () => { this._handleOpenPhoto() });
  }

  // _handleLikePhoto() {
  //   this._card.querySelector('.element__like').classList.toggle('element__like_active');
  // }
  _handleLikedPhoto() {
    this._cardLikeButton.classList.add('element__like_active');
  }


  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  _handleOpenPhoto() {
    this._handleCardClick({
      name: this._name,
      link: this._link
    });
  }

  setLikes() {
    const countLikesElement = this._card.querySelector('.element__like-count');
    countLikesElement.textContent = this._likes.length
  }

  getRenderedCard() {
    this._cardTitle.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._setEventListeners();
    this.setLikes();
    if (this._userId !== this._ownerId) {
      this._card.querySelector('.element__delete-button').style.display = 'none'
    }
    const userHasLikedCard = (this._likes.find(user => {user._id === this._userId}))
    if (userHasLikedCard) {
      console.log('ты лайкнул!')
      this._handleLikedPhoto();
    }

    return this._card;
  }
}
