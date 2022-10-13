
const popupElementEditProfile = document.querySelector('.popup_edit-profile'); //попап окно редактирования профиля
// const formEditProfile = popupElementEditProfile.querySelector('#formEditProfile'); //форма добавления фото
const popupElementAddPhoto = document.querySelector('.popup_add-photo');       //попап окно добавления фото
// const formAddPhoto = popupElementAddPhoto.querySelector('#formAddPhoto');
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

function openPopup(popupWindow) {
  popupWindow.classList.add('popup_opened');
}

function closePopup(popupWindow) {
  popupWindow.classList.remove('popup_opened');
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
function formSubmitAddPhoto(evt) {  //-------------функция добавления фотокарточки
  evt.preventDefault();
  const newCard = [];
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
  const arrayCardsReversed = arrayCards.reverse();   // перевернули массив чтобы складывать в Dom c последнего до первого
  arrayCardsReversed.forEach(function (item) {
    elementsContainer.prepend(createCard(item));
  });
};



//редактироване профиля---------------------------
buttonProfileEdit.addEventListener('click', () => {
  openPopup(popupElementEditProfile);
  fillProfileEditForm();
})

formEditProfile.addEventListener('submit', submitEditProfile);


buttonClosePopupEditProfile.addEventListener('click', () => {
  eraseForm(popupElementEditProfile); //очищаем форму перед закрытием
  closePopup(popupElementEditProfile);
})

//--------добавление фото---------------
buttonAddPhoto.addEventListener('click', () => {
  openPopup(popupElementAddPhoto);
  // после открытия попапа надо навесить disable на кнопку, т.к. форма пустая
})
buttonClosePopupAddPhoto.addEventListener('click', () => {
  // resetForm(popupElementAddPhoto.querySelector('.popup__form'));
  eraseForm(popupElementAddPhoto);
  closePopup(popupElementAddPhoto);
})
formAddPhoto.addEventListener('submit', formSubmitAddPhoto);

//------------
buttonClosePopupWiewPhoto.addEventListener('click', () => {
  closePopup(popupElementWievPhoto);
})
renderCards(initialCards);

function enableValidation(settings) {
  const popupFormList = document.querySelectorAll(settings.formSelector); //список всех форм
  popupFormList.forEach(function (element) {
    element.addEventListener('input', (evt) => {
      const currentForm = evt.currentTarget;
      const submitButton = currentForm.querySelector(settings.submitButtonSelector);

      isValid(evt.target, settings.inputErrorClass);

      if (currentForm.checkValidity()) {
        enableButton(submitButton, settings.inactiveButtonClass);
      }
      else {
        disableButton(submitButton, settings.inactiveButtonClass);
      }
    });

  }, settings)
}

function isValid(input, nameInputFormErrorClass) {
  const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
  errorSpan.textContent = input.validationMessage;
  if (!input.validity.valid) {
    input.classList.add(nameInputFormErrorClass);
  }
  else input.classList.remove(nameInputFormErrorClass);
}

function eraseForm (popup) {
  const currentForm = popup.querySelector('.popup__form');
  // const saveButton = currentForm.querySelector('.popup__save-button');
  resetForm(currentForm);
  currentForm.querySelectorAll('.popup__error_visible').forEach(function (span) {
    span.textContent = "";
  })
  currentForm.querySelectorAll('.popup__input-form').forEach(function (input) {
    input.classList.remove('popup__input-form_error');
  })
  currentForm.querySelector('.popup__save-button').classList.remove('popup__save-button_disabled');
}

function disableButton(button, nameDisableClass) {
  button.setAttribute('disabled', true);
  button.classList.add(nameDisableClass);
}

function enableButton(button, nameDisableClass) {
  button.removeAttribute('disabled');
  button.classList.remove(nameDisableClass);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-form',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input-form_error',
  errorClass: '.popup__error_visible'
});
