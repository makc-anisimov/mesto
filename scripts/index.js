import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import {
  initialCards,
  settingsForm as settings,
  buttonProfileEdit,
  buttonClosePopupEditProfile,
  buttonAddPhoto,
  // buttonClosePopupAddPhoto,
  // buttonClosePopupWiewPhoto,
  // popupList,
  // popupElementAddPhoto,
  // popupElementEditProfile,
  // popupElementWievPhoto,
  formEditProfile,
  formAddPhoto
} from "./consts.js";

import {
  // openPopup,
  // closePopup,
  fillProfileEditForm,
  submitEditProfile,
  // renderCards,
  // createCard,
  handlePhotoSubmit,
} from "./utils.js"
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { Card } from "./Card.js";

const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddPhotoValidator = new FormValidator(settings, formAddPhoto);

// отрисовка карточек через экз класса Section
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
  (evt) => {
    userInfo.setUserInfo(evt);
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
  // fillProfileEditForm();
  // openPopup(popupElementEditProfile);
});

// formEditProfile.addEventListener('submit', submitEditProfile);

// buttonClosePopupEditProfile.addEventListener('click', () => {
//   closePopup(popupElementEditProfile);
// })

//--------добавление фото---------------
buttonAddPhoto.addEventListener('click', () => {
  formAddPhotoValidator.eraseForm();
  formAddPhotoValidator.checkButtonOpen();
  popupAddPhoto.open();
  // formAddPhotoValidator.checkButtonOpen();
  // openPopup(popupElementAddPhoto);
})

// buttonClosePopupAddPhoto.addEventListener('click', () => {
//   closePopup(popupElementAddPhoto);
// })

// formAddPhoto.addEventListener('submit', handlePhotoSubmit);

//------------
// buttonClosePopupWiewPhoto.addEventListener('click', () => {
//   closePopup(popupElementWievPhoto);
// })

// renderCards(initialCards); // отрисовка карточек


// popupList.forEach(function (popup) {
//   popup.addEventListener('mousedown', (evt) => {    //  функция закрытя попапа по клику
//     if (evt.currentTarget === evt.target) {
//       closePopup(popup);
//     }
//   })
// });


// // отрисовка карточек через экз класса Section
// const section = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     const card = createCard(item);
//     section.addItem(card);
//   }
// }, '.elements__list')

// const createCard = (dataCard) => {
//   const cardItem = new Card(
//     dataCard,
//     '.element-template',
//     (cardPhoto) => {
//       popupWiewPhoto.open(cardPhoto)
//     });
//   return cardItem.getRenderedCard();
// }


// отрисовка всех карточек на странице
section.renderAllitems();
