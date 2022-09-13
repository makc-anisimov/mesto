const popupElement = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit');
const closePopupButton = popupElement.querySelector('.popup__close-button');
const savePopupButton = popupElement.querySelector('.popup__save-button');

var profileName = document.querySelector('.profile__name');
var profileJob = document.querySelector('.profile__job');
var profileEditName = popupElement.querySelector('.popup__input-name');
var profileEditJob = popupElement.querySelector('.popup__input-job');

// const toggleOverlay = () => {
//     popupElement.classList.toggle('overlay_opened');
// }
function openPopup () {
    popupElement.classList.add('popup_opened');
}

function closePopup () {
    popupElement.classList.remove('popup_opened');
}


function fillEditForm() {
    profileEditName.value = profileName.textContent;
    profileEditJob.value = profileJob.textContent;
};

openPopupButton.addEventListener('click', () => {
    openPopup();
    fillEditForm();
})

closePopupButton.addEventListener ('click', () => {
    closePopup();
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = profileEditName.value;
    // console.log(profileEditName.value);
    profileJob.textContent = profileEditJob.value;
    closePopup();
    };

savePopupButton.addEventListener('click', formSubmitHandler);