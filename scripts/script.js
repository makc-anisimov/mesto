
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
    eraseForm(activePopup);
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
  const newCard = {};
  newCard.link = inputAddPhotoSrcLink.value;
  newCard.name = inputAddPhotoName.value;
  elementsContainer.prepend(createCard(newCard));
  const currentForm = evt.target;
  resetForm(currentForm);               // очищаем текушую форму
  closePopup(popupElementAddPhoto); //  закрываем окно формы
};


function createCard(dataCard) {  //-----------------------функция создания карточки--------------
  const card = templateElement.cloneNode(true); // из темплейта создаем шаблон карточки.
  const cardPhoto = card.querySelector('.element__photo'); //фото в карточке
  const cardTitle = card.querySelector('.element__title');  //название места
  cardTitle.textContent = dataCard.name;
  cardPhoto.src = dataCard.link;
  cardPhoto.alt = dataCard.name;
  //--------навешиваем слушиватели------------
  const cardLikeButton = card.querySelector('.element__like'); //ищем  кнопку like

  cardLikeButton.addEventListener('click', () => {
    cardLikeButton.classList.toggle('element__like_active');   // по клику выполняем смену лайка
  });
  cardPhoto.addEventListener('click', () => {  //просмотр фото
    photoOpened.src = dataCard.link; //передаем в попап адрес фото
    photoOpened.alt = dataCard.name; //передать в попапе альт для фото из названия карточки
    photoTitle.textContent = dataCard.name; //передать в попап заголовок из названия карточки
    openPopup(popupElementWievPhoto);
  });
  const cardRemoveButton = card.querySelector('.element__delete-button');
  cardRemoveButton.addEventListener('click', () => {
    const removedCard = cardRemoveButton.closest('.element');
    removedCard.remove();
  });
  return card; //получили карточку с данными
};

function renderCards(arrayCards) {  //-----------функция создания списка элементов в DOM из массива данных "карточки"
  arrayCards.forEach(function (item) {
    elementsContainer.append(createCard(item));
  });
};


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

//редактироване профиля---------------------------
buttonProfileEdit.addEventListener('click', () => {
  fillProfileEditForm();
  openPopup(popupElementEditProfile);
  checkButtonOpenPopup(formEditProfile);
});

formEditProfile.addEventListener('submit', submitEditProfile);

buttonClosePopupEditProfile.addEventListener('click', () => {
  eraseForm(popupElementEditProfile); //очищаем форму перед закрытием
  closePopup(popupElementEditProfile);
})

//--------добавление фото---------------
buttonAddPhoto.addEventListener('click', () => {
  openPopup(popupElementAddPhoto);
  checkButtonOpenPopup(formAddPhoto);
  // после открытия попапа надо навесить disable на кнопку, т.к. форма пустая - done!
})
buttonClosePopupAddPhoto.addEventListener('click', () => {
  eraseForm(popupElementAddPhoto);
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
      eraseForm(popup);
      closePopup(popup);
    }
  })
});
