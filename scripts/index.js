import { FormValidator } from "./FormValidator.js";
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
  popupElementWievPhoto
} from "./consts.js";

import {
  openPopup,
  closePopup,
  fillProfileEditForm,
  submitEditProfile,
  renderCards,
  handlePhotoSubmit,
} from "./utils.js"

//редактироване профиля---------------------------
buttonProfileEdit.addEventListener('click', () => {
  // eraseForm(popupElementEditProfile);
  fillProfileEditForm();
  openPopup(popupElementEditProfile);
  // checkButtonOpenPopup(formEditProfile);
});

formEditProfile.addEventListener('submit', submitEditProfile);

buttonClosePopupEditProfile.addEventListener('click', () => {
  closePopup(popupElementEditProfile);
})

//--------добавление фото---------------
buttonAddPhoto.addEventListener('click', () => {
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

renderCards(initialCards); // отрисовка карточек

popupList.forEach(function (popup) {
  popup.addEventListener('mousedown', (evt) => {    //  функция закрытя попапа по клику
    if (evt.currentTarget === evt.target) {
      closePopup(popup);
    }
  })
});

const popupFormList = document.querySelectorAll(settings.formSelector); //список всех форм
popupFormList.forEach(function (element) {
  const currentFormValidator = new FormValidator(settings, element);
  currentFormValidator.enableValidation();
}, settings)
