
export class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      // console.log(evt);
      this.close();
    }
  }

  setEventListeners() {
    const popupCloseButton = this._popup.querySelector('.popup__close-button');
    popupCloseButton.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.currentTarget === evt.target) {
        this.close();
      }
    });
  }
}
