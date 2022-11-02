// import * from "."
import { Card } from "./Card.js";
import { initialCards } from "./consts.js";
import { settingsForm as settings} from "./consts.js";


const popupList = document.querySelectorAll('.popup');   //список всех попапов
const popupElementEditProfile = document.querySelector('.popup_edit-profile'); //попап окно редактирования профиля
const popupElementAddPhoto = document.querySelector('.popup_add-photo');       //попап окно добавления фото
const formEditProfile = document.forms.formEditProfile;
const formAddPhoto = document.forms.formAddPhoto;

const popupElementWievPhoto = document.querySelector('.popup_wiew-photo');       //попап окно просмотра фото
const photoOpened = popupElementWievPhoto.querySelector('.popup__photo-opened');
const photoTitle = popupElementWievPhoto.querySelector('.popup__photo-title');

const buttonProfileEdit = document.querySelector('.profile__edit');      //кнопка редакт профиля
const buttonAddPhoto = document.querySelector('.profile__add-button');   //кнопка добавления фото

const buttonClosePopupEditProfile = popupElementEditProfile.querySelector('.popup__close-button'); //кнопка закрытия попапа редакт-я. профия
const buttonClosePopupAddPhoto = popupElementAddPhoto.querySelector('.popup__close-button');//кнопка закрытия попапа добавления фото
const buttonClosePopupWiewPhoto = popupElementWievPhoto.querySelector('.popup__close-button'); //кнопка закрытия попапа просмотра фото

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileEditName = popupElementEditProfile.querySelector('#inputName');
const profileEditJob = popupElementEditProfile.querySelector('#inputJob');

const elementsContainer = document.querySelector('.elements__list'); //NodeList всех карточек DOM
const templateElement = document.querySelector('.element-template').content; // шаблон карточки

const inputAddPhotoName = popupElementAddPhoto.querySelector('#inputMestoName'); //инпут названия в попапе добавления фото
const inputAddPhotoSrcLink = popupElementAddPhoto.querySelector('#inputMestoLink'); // инпут ссылки на фото в попапе добавления фото

const ESC_KEYCODE = 27;

function openPopup(popupWindow) {
  popupWindow.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscUp);
}

function closePopup(popupWindow) {
  document.removeEventListener('keydown', handleEscUp); // удаляем слушатель ESC перед закрытием!
  popupWindow.classList.remove('popup_opened');
}

function handleEscUp(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}

function resetForm(form) {
  form.reset();
}

function fillProfileEditForm() {
  profileEditName.value = profileName.textContent;
  profileEditJob.value = profileJob.textContent;
};

function submitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileEditName.value;
  profileJob.textContent = profileEditJob.value;
  closePopup(popupElementEditProfile);
};

function handlePhotoSubmit(evt) {  //-------------функция добавления фотокарточки
  evt.preventDefault();
  const dataNewCard = {};
  dataNewCard.link = inputAddPhotoSrcLink.value;
  dataNewCard.name = inputAddPhotoName.value;

  const cardItem = new Card(dataNewCard, templateElement);
    elementsContainer.prepend(cardItem.getRenderedCard());

  const currentForm = evt.target;
  resetForm(currentForm);               // очищаем текушую форму
  closePopup(popupElementAddPhoto); //  закрываем окно формы
};

export function handleOpenPhotoPopup (name, link) {
    photoOpened.src = link; //передаем в попап адрес фото
    photoOpened.alt = name; //передать в попапе альт для фото из названия карточки
    photoTitle.textContent = name; //передать в попап заголовок из названия карточки
    openPopup(popupElementWievPhoto);
}

function renderCards(arrayCards) {  //-----------функция создания списка элементов в DOM из массива данных "карточки"
  arrayCards.forEach(function (item) {
    const cardItem = new Card(item, templateElement);
    elementsContainer.append(cardItem.getRenderedCard());
    // elementsContainer.append(createCard(item));
  });

};



//редактироване профиля---------------------------
buttonProfileEdit.addEventListener('click', () => {
  eraseForm(popupElementEditProfile);
  fillProfileEditForm();
  openPopup(popupElementEditProfile);
  checkButtonOpenPopup(formEditProfile);
});

formEditProfile.addEventListener('submit', submitEditProfile);

buttonClosePopupEditProfile.addEventListener('click', () => {
  closePopup(popupElementEditProfile);
})

//--------добавление фото---------------
buttonAddPhoto.addEventListener('click', () => {
  eraseForm(popupElementAddPhoto);
  checkButtonOpenPopup(formAddPhoto);
  openPopup(popupElementAddPhoto);
  // после открытия попапа надо навесить disable на кнопку, т.к. форма пустая - done!
})
buttonClosePopupAddPhoto.addEventListener('click', () => {
  closePopup(popupElementAddPhoto);
})
formAddPhoto.addEventListener('submit', handlePhotoSubmit);

//------------
buttonClosePopupWiewPhoto.addEventListener('click', () => {
  closePopup(popupElementWievPhoto);
})
renderCards(initialCards);

popupList.forEach(function (popup) {
  popup.addEventListener('mousedown', (evt) => {    //  функция закрытя попапа по клику
    if (evt.currentTarget === evt.target) {
      closePopup(popup);
    }
  })
});

function showInputError(input, nameInputFormErrorClass) {
  const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
  errorSpan.textContent = input.validationMessage;
  input.classList.add(nameInputFormErrorClass);
}

function hideInputError(input, nameInputFormErrorClass) {
  const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
  errorSpan.textContent = "";
  input.classList.remove(nameInputFormErrorClass);
}

function isValid(input, nameInputFormErrorClass) {
  if (!input.validity.valid) {
    showInputError(input, nameInputFormErrorClass)
  }
  else hideInputError(input, nameInputFormErrorClass)
}

function enableValidation(settings) {
  const popupFormList = document.querySelectorAll(settings.formSelector); //список всех форм
  popupFormList.forEach(function (element) {
    element.addEventListener('input', (evt) => {
      const currentForm = evt.currentTarget;
      isValid(evt.target, settings.inputErrorClass);
      checkButtonOpenPopup(currentForm);
    });
  }, settings)
}

function eraseForm(popup) {
  const currentForm = popup.querySelector('.popup__form');
  resetForm(currentForm);
  currentForm.querySelectorAll('.popup__error_visible').forEach(function (span) {
    span.textContent = "";
  })
  currentForm.querySelectorAll('.popup__input-form').forEach(function (input) {
    hideInputError(input, 'popup__input-form_error');
  })
}

function disableButton(button, nameDisableClass) {
  button.setAttribute('disabled', true);
  button.classList.add(nameDisableClass);
}

function enableButton(button, nameDisableClass) {
  button.removeAttribute('disabled');
  button.classList.remove(nameDisableClass);
}
// функция проверки и изменения статуса кнопки сохранения при открытии попапа
function checkButtonOpenPopup(form) {
  const buttonSave = form.querySelector('.popup__save-button');
  if (form.checkValidity()) {
    enableButton(buttonSave, 'popup__save-button_disabled');
  }
  else {
    disableButton(buttonSave, 'popup__save-button_disabled');
  }
}

enableValidation(settings);
