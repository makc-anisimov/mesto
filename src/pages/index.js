import './index.css';
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import {
  settingsForm as settings,
  buttonProfileEdit,
  buttonAddPhoto,
  buttonAvatarEdit,
  formEditProfile,
  formAddPhoto,
  formUpdateAvatar
} from "../scripts/consts.js";

import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupConfirmDeleteCard } from '../components/PopupConfirmDeleteCard.js';
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Card } from "../components/Card.js";
import { api } from '../components/Api.js';

let userId

const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddPhotoValidator = new FormValidator(settings, formAddPhoto);
const formUpdateAvatarValidator = new FormValidator(settings, formUpdateAvatar);

const section = new Section(
  (item) => {
    const card = createCard(item);
    section.addItem(card);
  },
  '.elements__list')

const prepareData = (item) => {
  return {
    name: item.name,
    link: item.link,
    likes: item.likes,
    id: item._id,
    userId: userId,
    ownerId: item.owner._id
  }
}

const createCard = (dataCard) => {
  const cardItem = new Card(
    dataCard,
    '.element-template',
    (cardPhoto) => { popupWiewPhoto.open(cardPhoto) },
    (id) => {
      popupConfirm.open(id, cardItem)
    },
    (id) => {
      if (cardItem.isLiked()) {
        api.deleteLike(id)
          .then(res => {
            cardItem.setLikes(res.likes)
          })
          .catch(err => console.log(`Ошибка: ${err}`))
      } else {
        api.addLike(id)
          .then(res => {
            cardItem.setLikes(res.likes)
          })
          .catch(err => console.log(`Ошибка: ${err}`))
      }
    }
  );
  return cardItem.getRenderedCard();
}

const popupEditProfile = new PopupWithForm(
  '.popup_type_profile-edit',
  (dataProfile) => {
    api.edtiProfile(dataProfile.profileName, dataProfile.profileJob)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditProfile.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => {
        popupEditProfile.buttonTextSave();
      })
  }
);

const popupWiewPhoto = new PopupWithImage('.popup_wiew-photo');
const userInfo = new UserInfo({
  selectorName: '.profile__name',
  selectorJob: '.profile__job',
  selectorAvatarPhoto: '.profile__photo'
});

const popupAddPhoto = new PopupWithForm('.popup_type_add-photo',
  (inputData) => {
    api.addCard(inputData.mestoName, inputData.mestoLink)
      .then(res => {
        const newCard = createCard(prepareData(res))
        section.addItem(newCard);
        popupAddPhoto.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => {
        popupAddPhoto.buttonTextSave();
      })
  });

const popupConfirm = new PopupConfirmDeleteCard('.popup_type_confirm', (id, card) => {
  api.deleteCard(id)
    .then(() => {
      card.deleteCard();
      popupConfirm.close();
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupConfirm.buttonTextSave();
    })
})

const popupUpdateAvatar = new PopupWithForm('.popup_type_update-avatar', ({ AvatarLink }) => {
  api.updateAvatar(AvatarLink)
    .then(res => {
      userInfo.setUserInfo(res);
      popupUpdateAvatar.close();
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupUpdateAvatar.buttonTextSave();
    })
})

Promise.all([
  api.getProfile(),
  api.getInitialCards()
])
  .then(([profile, initialCards]) => { //попадаем сюда когда оба промиса будут выполнены
    userInfo.setUserInfo(profile);
    userId = profile._id;
    section.renderAllitems(initialCards.map(prepareData))
  })
  .catch(err => console.log(`Ошибка: ${err}`));

formEditProfileValidator.enableValidation();
formAddPhotoValidator.enableValidation();
formUpdateAvatarValidator.enableValidation();

popupEditProfile.setEventListeners();
popupAddPhoto.setEventListeners();
popupWiewPhoto.setEventListeners();
popupConfirm.setEventListeners();
popupUpdateAvatar.setEventListeners();

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

buttonAvatarEdit.addEventListener('click', () => {
  formUpdateAvatarValidator.eraseForm();
  formUpdateAvatarValidator.checkButtonOpen();
  popupUpdateAvatar.open();
})
