//const popupElement = document.querySelector('.popup');

const popupElementEditProfile = document.querySelector('.popup_edit-profile'); //попап окно редактирования профиля
const popupElementAddPhoto = document.querySelector('.popup_add-photo');       //попап окно добавления фото
const popupElementWievPhoto = document.querySelector('.popup_wiew-photo');       //попап окно добавления фото

const buttonProfileEdit = document.querySelector('.profile__edit');      //кнопка редакт профиля
const buttonAddPhoto = document.querySelector('.profile__add-button');   //кнопка добавления фото

const buttonClosePopupEditProfile = popupElementEditProfile.querySelector('.popup__close-button'); //кнопка закрытия попапа редакт-я. профия
const buttonClosePopupAddPhoto = popupElementAddPhoto.querySelector('.popup__close-button');//кнопка закрытия попапа добавления фото
const buttonClosePopupWiewPhoto = popupElementWievPhoto.querySelector('.popup__close-button'); //кнопка закрытия попапа просмотра фото





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

//редактироване профиля---------------------------

buttonProfileEdit.addEventListener('click', () => {
  openPopup(popupElementEditProfile);
  fillProfileEditForm();
})
buttonClosePopupEditProfile.addEventListener('click', () => {
  closePopup(popupElementEditProfile);
})

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let profileEditName = popupElementEditProfile.querySelector('#inputName');
let profileEditJob = popupElementEditProfile.querySelector('#inputJob');

function formSubmitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileEditName.value;
  profileJob.textContent = profileEditJob.value;
  closePopup(popupElementEditProfile);
};
popupElementEditProfile.addEventListener('submit', formSubmitEditProfile);
//--------------------------------------------------

// !!!!добавление места черновик
buttonAddPhoto.addEventListener('click', () => {
  openPopup(popupElementAddPhoto);
})

buttonClosePopupAddPhoto.addEventListener('click', () => {
  closePopup(popupElementAddPhoto);
})

const elementsList = document.querySelectorAll('.element'); //NodeList всех карточек
const templateElement = document.querySelector('.element-template').content; // шаблон карточки

const inputAddPhotoName = popupElementAddPhoto.querySelector('#inputMestoName'); //инпут названия в попапе добавления фото
const inputAddPhotoSrcLink = popupElementAddPhoto.querySelector('#inputMestoLink'); // инпут ссылки на фото в попапе добавления фото

const items = Array.from(elementsList); //получили массив из NodeList всех элементов массива

function formSubmitAddPhoto(evt) {
  // evt.preventDefault();
  //  = inputAddPhotoName.value;
  //  = inputAddPhotoSrcLink.value;
  console.log(inputAddPhotoName.value);
  console.log(inputAddPhotoSrcLink.value);
  // closePopup(popupElementAddPhoto);
};
popupElementAddPhoto.addEventListener('submit', formSubmitAddPhoto);
//------------



//----------реализация лайка на фотографиях-----------------
const elementsLike = document.querySelectorAll('.element__like'); //ищем все элементы имеющие кнопку like
elementsLike.forEach(function (element) {                          //для каждого элемента
  element.addEventListener('click', function (like) {              //навешиваем слушатель: по клику выполняем
    like.target.classList.toggle('element__like_active');         //вкл-выкл лайка
  })
});
//-----------------------------------------------------------


//-----------------реализация просмотра фото по клику----------
const photoOpened = popupElementWievPhoto.querySelector('.popup__photo-opened');
const photoTitle = popupElementWievPhoto.querySelector('.popup__photo-title');
const elementsPhoto = document.querySelectorAll('.element__photo');  //ищем все элементы -фотографии
elementsPhoto.forEach(function (element) {                          //для каждого элемента
  element.addEventListener('click', function () {
    const currentCard = element.closest('.element'); //получили всю карточку по которой клик на фото
    const currentCardTitle = currentCard.querySelector('.element__title'); //получили название фото

    photoOpened.src = element.src; //передаем в попап адрес фото
    photoOpened.alt = currentCardTitle.textContent; //передать в попапе альт для фото из названия карточки
    photoTitle.textContent = currentCardTitle.textContent; //передать в попап заголовок из названия фото
    openPopup(popupElementWievPhoto);
  })
});
buttonClosePopupWiewPhoto.addEventListener('click', () => {
  closePopup(popupElementWievPhoto);
})
//--------------------------------------------------------------

//-----------------------функция создания карточки--------------
function createCard(dataCard) {
  const newHtmlElement = templateElement.cloneNode(true); // из темплейта создаем шаблон карточки.
  const  cardPhoto = newHtmlElement.querySelector('.element__photo'); //фото в карточке
  const cardTitle = newHtmlElement.querySelector('.element__title');  //название места
  cardTitle.textContent = dataCard.name;
  cardPhoto.src = dataCard.link;
  cardPhoto.alt = dataCard.name;
  // return newHtmlElement;   надо ли чтото возвращать???
};
// ---------------------------------------------------------------
