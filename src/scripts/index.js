import '../pages/index.css';
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import {
  initialCards,
  settingsForm as settings,
  buttonProfileEdit,
  buttonAddPhoto,
  formEditProfile,
  formAddPhoto
} from "./consts.js";

import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { Card } from "./Card.js";

const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddPhotoValidator = new FormValidator(settings, formAddPhoto);

const section = new Section({
  items: initialCards.reverse(),
  renderer: (item) => {
    const card = createCard(item);
    section.addItem(card);
  }
}, '.elements__list')

const createCard = (dataCard) => {
  const cardItem = new Card(
    dataCard,
    '.element-template',
    (cardPhoto) => {
      popupWiewPhoto.open(cardPhoto)
    });
  return cardItem.getRenderedCard();
}

const popupEditProfile = new PopupWithForm(
  '.popup_type_profile-edit',
  (dataProfile) => {
    userInfo.setUserInfo(dataProfile);
  }
);

const popupWiewPhoto = new PopupWithImage('.popup_wiew-photo');
const userInfo = new UserInfo({
  selectorName: '.profile__name',
  selectorJob: '.profile__job'
});

const popupAddPhoto = new PopupWithForm('.popup_type_add-photo',
  (inputData) => {
    const dataNewCard = {
      name: inputData.mestoName,
      link: inputData.mestoLink
    };
    const newCard = createCard(dataNewCard);
    section.addItem(newCard);

  });

formEditProfileValidator.enableValidation();
formAddPhotoValidator.enableValidation();

popupEditProfile.setEventListeners();
popupAddPhoto.setEventListeners();
popupWiewPhoto.setEventListeners();

//редактироване профиля---------------------------
buttonProfileEdit.addEventListener('click', () => {
  formEditProfileValidator.eraseForm();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formEditProfileValidator.checkButtonOpen();
  popupEditProfile.open();
});

//--------добавление фото---------------
buttonAddPhoto.addEventListener('click', () => {
  formAddPhotoValidator.eraseForm();
  formAddPhotoValidator.checkButtonOpen();
  popupAddPhoto.open();
})

// отрисовка всех карточек на странице
section.renderAllitems();
