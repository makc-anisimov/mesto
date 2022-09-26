//const popupElement = document.querySelector('.popup');

const popupElementEditProfile = document.querySelector('.popup_edit-profile'); //попап окно редактирования профиля
const popupElementAddPhoto = document.querySelector('.popup_add-photo');       //попап окно добавления фото
const popupElementWievPhoto = document.querySelector('.popup_wiew-photo');       //попап окно добавления фото

const buttonProfileEdit = document.querySelector('.profile__edit');      //кнопка редакт профиля
const buttonAddPhoto = document.querySelector('.profile__add-button');   //кнопка добавления фото

const buttonClosePopupEditProfile = popupElementEditProfile.querySelector('.popup__close-button'); //кнопка закрытия попапа редакт-я. профия
const buttonClosePopupAddPhoto = popupElementAddPhoto.querySelector('.popup__close-button');//кнопка закрытия попапа добавления фото
const buttonClosePopupWiewPhoto = popupElementWievPhoto.querySelector('.popup__close-button'); //кнопка закрытия попапа просмотра фото



let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let profileEditName = popupElementEditProfile.querySelector('#inputName');
let profileEditJob = popupElementEditProfile.querySelector('#inputJob');

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

function formSubmitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileEditName.value;
  profileJob.textContent = profileEditJob.value;
  closePopup(popupElementEditProfile);
};
popupElementEditProfile.addEventListener('submit', formSubmitEditProfile);
//--------------------------------------------------
// !!!!добавление места
buttonAddPhoto.addEventListener('click', () => {
  openPopup(popupElementAddPhoto);

})
buttonClosePopupAddPhoto.addEventListener('click', () => {
  closePopup(popupElementAddPhoto);
})
//------------

// реализация лайка на фотографиях
const elementsLike = document.querySelectorAll('.element__like'); //ищем все элементы имеющие кнопку like
elementsLike.forEach(function (element) {                          //для каждого элемента
  element.addEventListener('click', function (like) {              //навешиваем слушатель: по клику выполняем
    like.target.classList.toggle('element__like_active');         //вкл-выкл лайка
  })
});
//-----------------------------
// реализация просмотра фото по клику
const photoOpened = popupElementWievPhoto.querySelector('.popup__photo-opened');
const photoTitle = popupElementWievPhoto.querySelector('.popup__photo-title');
const elementsPhoto = document.querySelectorAll('.element__photo');  //ищем все элементы -фотографии
elementsPhoto.forEach(function (element) {                          //для каждого элемента
  element.addEventListener('click', function () {
    openPopup(popupElementWievPhoto);
    const currentCard = element.parentElement; //получили всю карточку по которой клик на фото
    const currentCardTitle = currentCard.querySelector('.element__title'); //получили название фото

    photoOpened.src = element.src; //передаем в попап адрес фото
    photoOpened.alt = currentCardTitle.textContent; //передать в попапе альт для фото из названия карточки
    photoTitle.textContent = currentCardTitle.textContent; //передать в попап заголовок из названия фото
  })
});
buttonClosePopupWiewPhoto.addEventListener('click', () => {
  closePopup(popupElementWievPhoto);
})
//----------------------------------------


