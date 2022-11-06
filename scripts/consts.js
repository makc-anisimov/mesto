export const popupList = document.querySelectorAll('.popup');   //список всех попапов
export const popupElementEditProfile = document.querySelector('.popup_type_profile-edit'); //попап окно редактирования профиля
export const popupElementAddPhoto = document.querySelector('.popup_type_add-photo');       //попап окно добавления фото
export const formEditProfile = document.forms.formEditProfile;
export const formAddPhoto = document.forms.formAddPhoto;

export const popupElementWievPhoto = document.querySelector('.popup_wiew-photo');       //попап окно просмотра фото
export const photoOpened = popupElementWievPhoto.querySelector('.popup__photo-opened');
export const photoTitle = popupElementWievPhoto.querySelector('.popup__photo-title');

export const buttonProfileEdit = document.querySelector('.profile__edit');      //кнопка редакт профиля
export const buttonAddPhoto = document.querySelector('.profile__add-button');   //кнопка добавления фото

export const buttonClosePopupEditProfile = popupElementEditProfile.querySelector('.popup__close-button'); //кнопка закрытия попапа редакт-я. профия
export const buttonClosePopupAddPhoto = popupElementAddPhoto.querySelector('.popup__close-button');//кнопка закрытия попапа добавления фото
export const buttonClosePopupWiewPhoto = popupElementWievPhoto.querySelector('.popup__close-button'); //кнопка закрытия попапа просмотра фото

export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const profileEditName = popupElementEditProfile.querySelector('#inputName');
export const profileEditJob = popupElementEditProfile.querySelector('#inputJob');

export const elementsContainer = document.querySelector('.elements__list'); //NodeList всех карточек DOM

export const inputAddPhotoName = popupElementAddPhoto.querySelector('#inputMestoName'); //инпут названия в попапе добавления фото
export const inputAddPhotoSrcLink = popupElementAddPhoto.querySelector('#inputMestoLink'); // инпут ссылки на фото в попапе добавления фото

export const ESC_KEYCODE = 27;
export const popupOpenedClass = 'popup_opened';

export const initialCards = [
  {
    name: 'San-Siro, Italy',
    link: 'https://images.unsplash.com/photo-1592829509461-46065945a32c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Camp Nou, Spain',
    link: 'https://images.unsplash.com/photo-1565483276107-8a1fbf01ab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Allianz Arena, Germany',
    link: 'https://images.unsplash.com/photo-1599158150601-1417ebbaafdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
  },
  {
    name: 'PSG Stadium, France',
    link: 'https://images.unsplash.com/photo-1610065132656-bbb6b4bf0da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Signal Iduna Park, Germany',
    link: 'https://images.unsplash.com/photo-1550769839-670461c55ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Old Trafford, England',
    link: 'https://images.unsplash.com/photo-1568194157720-8bbe7114ebe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
  }
];

export const settingsForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-form',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input-form_error',
  errorClass: '.popup__error_visible'
}
