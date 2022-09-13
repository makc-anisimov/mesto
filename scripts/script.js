const overlayElement = document.querySelector('.overlay');
const openPopupButton = document.querySelector('.profile__edit');
const closePopupButton = overlayElement.querySelector('.popup__close-button');
const savePopupButton = overlayElement.querySelector('.popup__save-button');

var profileName = document.querySelector('.profile__name');
var profileJob = document.querySelector('.profile__job');
var profileEditName = overlayElement.querySelector('.popup__name');
var profileEditJob = overlayElement.querySelector('.popup__job');

// const toggleOverlay = () => {
//     popupElement.classList.toggle('overlay_opened');
// }
function openOverlay () {
    overlayElement.classList.add('overlay_opened');
}

function closeOverlay () {
    overlayElement.classList.remove('overlay_opened');
}


function fillEditForm() {
    profileEditName.value = profileName.textContent;
    profileEditJob.value = profileJob.textContent;
};

openPopupButton.addEventListener('click', () => {
    openOverlay();
    fillEditForm();
})

closePopupButton.addEventListener ('click', () => {
    closeOverlay();
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = profileEditName.value;
    console.log(profileEditName.value);
    profileJob.textContent = profileEditJob.value;
    closeOverlay();
    };

savePopupButton.addEventListener('submit', formSubmitHandler);