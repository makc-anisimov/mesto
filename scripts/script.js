//const popupElement = document.querySelector('.popup'); уже не используется

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupElementEditProfile = document.querySelector('.popup_edit-profile'); //попап окно редактирования профиля
const popupElementAddPhoto = document.querySelector('.popup_add-photo');       //попап окно добавления фото
const popupElementWievPhoto = document.querySelector('.popup_wiew-photo');       //попап окно добавления фото
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

const elementsList = document.querySelector('.elements__list'); //NodeList всех карточек DOM
const templateElement = document.querySelector('.element-template').content; // шаблон карточки

const inputAddPhotoName = popupElementAddPhoto.querySelector('#inputMestoName'); //инпут названия в попапе добавления фото
const inputAddPhotoSrcLink = popupElementAddPhoto.querySelector('#inputMestoLink'); // инпут ссылки на фото в попапе добавления фото

function openPopup(popupWindow) {
  popupWindow.classList.add('popup_opened');
}

function closePopup(popupWindow) {
  popupWindow.classList.remove('popup_opened');
}

function fillProfileEditForm() {
  profileEditName.value = profileName.textContent;
  profileEditJob.value = profileJob.textContent;
};

function formSubmitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileEditName.value;
  profileJob.textContent = profileEditJob.value;
  closePopup(popupElementEditProfile);
};
function formSubmitAddPhoto(evt) {  //-------------функция добавления фотокарточки
  evt.preventDefault();
  const newCard = [];
  newCard.link = `${inputAddPhotoSrcLink.value}`;
  newCard.name = inputAddPhotoName.value;
  elementsList.prepend(createCard(newCard));
  inputAddPhotoName.value = '';     // очищаем поля ввода
  inputAddPhotoSrcLink.value = '';  //
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
    photoOpened.src = cardPhoto.src; //передаем в попап адрес фото
    photoOpened.alt = cardTitle.textContent; //передать в попапе альт для фото из названия карточки
    photoTitle.textContent = cardTitle.textContent; //передать в попап заголовок из названия фото
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
    elementsList.prepend(createCard(item));
  });
};
//редактироване профиля---------------------------
buttonProfileEdit.addEventListener('click', () => {
  openPopup(popupElementEditProfile);
  fillProfileEditForm();
})
buttonClosePopupEditProfile.addEventListener('click', () => {
  closePopup(popupElementEditProfile);
})
popupElementEditProfile.addEventListener('submit', formSubmitEditProfile);
//--------------------------------------------------

//--------доюавление фото---------------
buttonAddPhoto.addEventListener('click', () => {
  openPopup(popupElementAddPhoto);
})
buttonClosePopupAddPhoto.addEventListener('click', () => {
  closePopup(popupElementAddPhoto);
})
popupElementAddPhoto.addEventListener('submit', formSubmitAddPhoto);
//------------
buttonClosePopupWiewPhoto.addEventListener('click', () => {
  closePopup(popupElementWievPhoto);
})
renderCards(initialCards);
