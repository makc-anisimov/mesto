import {
  photoOpened,
  photoTitle,
  popupElementWievPhoto,
  popupElementEditProfile,
  popupElementAddPhoto,
  popupOpenedClass,
  popupSaveButtonClass,
  popupInputFormClass,
  popupFormClass,
  popupErrorVisibleClass,
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

export function openPopup(popupWindow) {
  popupWindow.classList.add(`${popupOpenedClass}`);
  document.addEventListener('keydown', handleEscUp);
}
export function closePopup(popupWindow) {
  document.removeEventListener('keydown', handleEscUp); // удаляем слушатель ESC перед закрытием!
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

export function isValid(input, nameInputFormErrorClass) {
  if (!input.validity.valid) {
    showInputError(input, nameInputFormErrorClass)
  }
  else hideInputError(input, nameInputFormErrorClass)
}
export function checkButtonOpenPopup(form) {
  const buttonSave = form.querySelector(`.${popupSaveButtonClass}`);
  if (form.checkValidity()) {
    enableButton(buttonSave, `${popupSaveButtonClass}_disabled`);
  }
  else {
    disableButton(buttonSave, `${popupSaveButtonClass}_disabled`);
  }
}

export function showInputError(input, nameInputFormErrorClass) {
  const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
  errorSpan.textContent = input.validationMessage;
  input.classList.add(nameInputFormErrorClass);
}

export function hideInputError(input, nameInputFormErrorClass) {
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

  const currentForm = evt.target;
  resetForm(currentForm);               // очищаем текушую форму
  closePopup(popupElementAddPhoto); //  закрываем окно формы
};

function disableButton(button, nameDisableClass) {
  button.setAttribute('disabled', true);
  button.classList.add(nameDisableClass);
}
function enableButton(button, nameDisableClass) {
  button.removeAttribute('disabled');
  button.classList.remove(nameDisableClass);
}
export function renderCards(arrayCards) {  //-----------функция создания списка элементов в DOM из массива данных "карточки"
  arrayCards.forEach(function (item) {
    const cardItem = new Card(item, templateElement);
    elementsContainer.append(cardItem.getRenderedCard());
  });

};

export function eraseForm(popup) {
  const currentForm = popup.querySelector(`.${popupFormClass}`);
  resetForm(currentForm);
  currentForm.querySelectorAll(`.${popupErrorVisibleClass}`).forEach(function (span) {
    span.textContent = "";
  })
  currentForm.querySelectorAll(`.${popupInputFormClass}`).forEach(function (input) {
    hideInputError(input, `${popupInputFormClass}_error`);
  })
}
