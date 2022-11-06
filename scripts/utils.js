import {
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
  inputAddPhotoName
} from "./consts.js";

import { Card } from "./Card.js";

export function openPopup(popupWindow) {
  popupWindow.classList.add(popupOpenedClass);
  document.addEventListener('keydown', handleEscUp);
}

export function closePopup(popupWindow) {
  document.removeEventListener('keydown', handleEscUp); // удаляем слушатель ESC перед закрытием!
  popupWindow.classList.remove(popupOpenedClass);
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

export function fillProfileEditForm() {
  profileEditName.value = profileName.textContent;
  profileEditJob.value = profileJob.textContent;
};

export function submitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileEditName.value;
  profileJob.textContent = profileEditJob.value;
  closePopup(popupElementEditProfile);
};

function createCard(dataCard) {
  const cardItem = new Card(dataCard, '.element-template');
  return cardItem.getRenderedCard();
}

export function handlePhotoSubmit(evt) {  //-------------функция добавления фотокарточки
  evt.preventDefault();
  const dataNewCard = {};
  dataNewCard.link = inputAddPhotoSrcLink.value;
  dataNewCard.name = inputAddPhotoName.value;

  elementsContainer.prepend(createCard(dataNewCard));
  closePopup(popupElementAddPhoto); //  закрываем окно формы
};

export function renderCards(arrayCards) {  //-----------функция создания списка элементов в DOM из массива данных "карточки"
  arrayCards.forEach(function (item) {
    elementsContainer.append(createCard(item));
  });
};
