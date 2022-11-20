import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import {
  initialCards,
  settingsForm as settings,
  buttonProfileEdit,
  buttonClosePopupEditProfile,
  buttonAddPhoto,
  buttonClosePopupAddPhoto,
  buttonClosePopupWiewPhoto,
  popupList,
  popupElementAddPhoto,
  popupElementEditProfile,
  popupElementWievPhoto,
  formEditProfile,
  formAddPhoto
} from "./consts.js";

import {
  openPopup,
  closePopup,
  fillProfileEditForm,
  submitEditProfile,
  // renderCards,
  createCard,
  handlePhotoSubmit,
} from "./utils.js"


const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddPhotoValidator = new FormValidator(settings, formAddPhoto);

formEditProfileValidator.enableValidation();
formAddPhotoValidator.enableValidation();

//редактироване профиля---------------------------
buttonProfileEdit.addEventListener('click', () => {
  // formEditProfileValidator.eraseForm();
  // fillProfileEditForm();
  // formEditProfileValidator.checkButtonOpen();
  // openPopup(popupElementEditProfile);
  const popupProfileEdit = new Popup('.popup_type_profile-edit');
  popupProfileEdit.setEventListeners();
  popupProfileEdit.open();
});

formEditProfile.addEventListener('submit', submitEditProfile);

// buttonClosePopupEditProfile.addEventListener('click', () => {
//   closePopup(popupElementEditProfile);
// })

//--------добавление фото---------------
buttonAddPhoto.addEventListener('click', () => {
  formAddPhotoValidator.eraseForm();
  formAddPhotoValidator.checkButtonOpen();
  openPopup(popupElementAddPhoto);
})

buttonClosePopupAddPhoto.addEventListener('click', () => {
  closePopup(popupElementAddPhoto);
})

formAddPhoto.addEventListener('submit', handlePhotoSubmit);

//------------
buttonClosePopupWiewPhoto.addEventListener('click', () => {
  closePopup(popupElementWievPhoto);
})

// renderCards(initialCards); // отрисовка карточек


// popupList.forEach(function (popup) {
//   popup.addEventListener('mousedown', (evt) => {    //  функция закрытя попапа по клику
//     if (evt.currentTarget === evt.target) {
//       closePopup(popup);
//     }
//   })
// });

// отрисовка карточек через экз класса Section
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    section.addItem(card);
  }
}, '.elements__list')
section.renderAllitems();

