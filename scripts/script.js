const popupElement = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit');
const closePopupButton = popupElement.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let profileEditName = popupElement.querySelector('#inputName');
let profileEditJob = popupElement.querySelector('#inputJob');

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
    // console.log(profileName);
    // console.log(profileJob);

})

closePopupButton.addEventListener ('click', () => {
    closePopup();
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = profileEditName.value;
    profileJob.textContent = profileEditJob.value;
    closePopup();
    };

    popupElement.addEventListener('submit', formSubmitHandler);
