import './index.css';
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import {
  initialCards,
  settingsForm as settings,
  buttonProfileEdit,
  buttonAddPhoto,
  formEditProfile,
  formAddPhoto,
  formUpdateAvatar
} from "../scripts/consts.js";

import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Card } from "../components/Card.js";
import { api } from '../components/Api.js';

let userId

api.getProfile()
  .then(res => {
    userInfo.setUserInfo({ profileName: res.name, profileJob: res.about });
    userId = res._id
  });

api.getInitialCards()
  .then(cardList => {
    cardList.forEach(item => {
      const card = createCard(
        {
          name: item.name,
          link: item.link,
          likes: item.likes,
          id: item._id,
          userId: userId,
          ownerId: item.owner._id
        });
      section.addItem(card);
    })
  });


const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddPhotoValidator = new FormValidator(settings, formAddPhoto);
const formUpdateAvatarValidator = new FormValidator(settings, formUpdateAvatar);

const section = new Section({
  items: [],
  renderer: (item) => {
    const card = createCard(item);
    section.addItem(card);
  }
}, '.elements__list')

const createCard = (dataCard) => {
  const cardItem = new Card(
    dataCard,
    '.element-template',
    (cardPhoto) => {
      popupWiewPhoto.open(cardPhoto)
    },
    (id) => {
      popupConfirm.open();
      popupConfirm.changeSubmitHandler(() => {
        api.deleteCard(id)
        .then(res => {
          cardItem.deleteCard()
        })
      })
    },
    (id) => {
      api.addLike(id)
      .then(res => {
         cardItem.setLikes(res.likes)
      })
    }
    );
  return cardItem.getRenderedCard();
}

const popupEditProfile = new PopupWithForm(
  '.popup_type_profile-edit',
  (dataProfile) => {
    api.edtiProfile(dataProfile.profileName, dataProfile.profileJob)
      .then(() => {
        userInfo.setUserInfo(dataProfile)
      });
  }
);

const popupWiewPhoto = new PopupWithImage('.popup_wiew-photo');
const userInfo = new UserInfo({
  selectorName: '.profile__name',
  selectorJob: '.profile__job'
});

const popupAddPhoto = new PopupWithForm('.popup_type_add-photo',
  (inputData) => {
    // const dataNewCard = {
    //   name: inputData.mestoName,
    //   link: inputData.mestoLink
    // };
    api.addCard(inputData.mestoName, inputData.mestoLink)
      .then(res => {
        const newCard = createCard({
          name: res.name,
          link: res.link,
          likes: res.likes,
          id: res._id,
          userId: userId,
          ownerId: res.owner._id
        })
        section.addItem(newCard);
      })

  });

  const popupConfirm = new PopupWithForm('.popup_type_confirm',() => {
    api.deleteCard()
    console.log('удалить карточку');
  })



formEditProfileValidator.enableValidation();
formAddPhotoValidator.enableValidation();
formUpdateAvatarValidator.enableValidation();

popupEditProfile.setEventListeners();
popupAddPhoto.setEventListeners();
popupWiewPhoto.setEventListeners();
popupConfirm.setEventListeners();

//редактироване профиля---------------------------
buttonProfileEdit.addEventListener('click', () => {
  formEditProfileValidator.eraseForm();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formEditProfileValidator.checkButtonOpen();
  popupEditProfile.open();
});

//--------добавление фото---------------
buttonAddPhoto.addEventListener('click', () => {
  // popupAddPhoto.resetForm();
  formAddPhotoValidator.eraseForm();
  formAddPhotoValidator.checkButtonOpen();
  popupAddPhoto.open();
})

// отрисовка всех карточек на странице
// section.renderAllitems();


// api.getProfile()
//   .then(res => {
//     // console.log('res', res);
//     userInfo.setUserInfo({ profileName: res.name, profileJob: res.about});
//   });

// api.getInitialCards()
// .then(res => {
//   console.log('res', res);
//   // userInfo.setUserInfo({ profileName: res.name, profileJob: res.about});
// });

