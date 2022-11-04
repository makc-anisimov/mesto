import {
  settingsForm,
  photoOpened,
  photoTitle,
  popupElementWievPhoto,
  popupElementEditProfile,
  popupElementAddPhoto,
  popupOpenedClass,
  ESC_KEYCODE,
  profileEditName,
  profileEditJob,
  profileName,
  profileJob,
  elementsContainer,
  inputAddPhotoSrcLink,
  inputAddPhotoName,
  templateElement
} from "./consts.js";

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

export function openPopup(popupWindow) {
  popupWindow.classList.add(`${popupOpenedClass}`);
  const activeForm = popupWindow.querySelector(settingsForm.formSelector);
  if (activeForm !== null) { // если в попапе есть форма с данными то проверяем ее
    const validateActiveForm = new FormValidator(settingsForm, activeForm);
    validateActiveForm.checkButtonOpen();
  }
  document.addEventListener('keydown', handleEscUp);
}

export function closePopup(popupWindow) {
  document.removeEventListener('keydown', handleEscUp); // удаляем слушатель ESC перед закрытием!
  if (popupWindow.querySelector(settingsForm.formSelector) !== null) { // если в попапе есть форма с данными то очищаем ее
    eraseForm(popupWindow);
  }
  popupWindow.classList.remove(`${popupOpenedClass}`);
}

export function handleOpenPhotoPopup(name, link) {
  photoOpened.src = link; //передаем в попап адрес фото
  photoOpened.alt = name; //передать в попапе альт для фото из названия карточки
  photoTitle.textContent = name; //передать в попап заголовок из названия карточки
  openPopup(popupElementWievPhoto);
}

export function handleEscUp(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    const activePopup = document.querySelector(`.${popupOpenedClass}`);
    closePopup(activePopup);
  }
}
export function resetForm(form) {
  form.reset();
}

export function fillProfileEditForm() {
  profileEditName.value = profileName.textContent;
  profileEditJob.value = profileJob.textContent;
};

function hideInputError(input, nameInputFormErrorClass) {
  const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
  errorSpan.textContent = "";
  input.classList.remove(nameInputFormErrorClass);
}
export function submitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileEditName.value;
  profileJob.textContent = profileEditJob.value;
  closePopup(popupElementEditProfile);
};

export function handlePhotoSubmit(evt) {  //-------------функция добавления фотокарточки
  evt.preventDefault();
  const dataNewCard = {};
  dataNewCard.link = inputAddPhotoSrcLink.value;
  dataNewCard.name = inputAddPhotoName.value;

  const cardItem = new Card(dataNewCard, templateElement);
  elementsContainer.prepend(cardItem.getRenderedCard());
  closePopup(popupElementAddPhoto); //  закрываем окно формы
};

export function renderCards(arrayCards) {  //-----------функция создания списка элементов в DOM из массива данных "карточки"
  arrayCards.forEach(function (item) {
    const cardItem = new Card(item, templateElement);
    elementsContainer.append(cardItem.getRenderedCard());
  });

};

export function eraseForm(popup) {
  const currentForm = popup.querySelector(settingsForm.formSelector);
  resetForm(currentForm);
  currentForm.querySelectorAll(settingsForm.errorClass).forEach(function (span) {
    span.textContent = "";
  })
  currentForm.querySelectorAll(settingsForm.inputSelector).forEach(function (input) {
    hideInputError(input, settingsForm.inputErrorClass);
  })
}
