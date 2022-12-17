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

const createCard = (dataCard) => {
  const cardItem = new Card(
    dataCard,
    '.element-template',
    (cardPhoto) => { popupWiewPhoto.open(cardPhoto) },
    (id) => {
      popupConfirm.open(id);
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
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => {
        popupEditProfile.buttonTextSave();
        popupEditProfile.close();
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
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => {
        popupAddPhoto.buttonTextSave();
        popupAddPhoto.close();
      })
  });

const popupConfirm = new PopupConfirmDeleteCard('.popup_type_confirm', (id) => {
  api.deleteCard(id)
    .then(() => {
      popupConfirm.buttonTextSave();
      popupConfirm.close();
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => {
      api.getInitialCards()
        .then(cardList => {
          cardList.reverse().forEach(item => {
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
        })
        .catch(err => console.log(`Ошибка: ${err}`));
    })
})

const popupUpdateAvatar = new PopupWithForm('.popup_type_update-avatar', ({ AvatarLink }) => {
  api.updateAvatar(AvatarLink)
    .then(res => {
      userInfo.setUserInfo(res);
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupUpdateAvatar.buttonTextSave();
      popupUpdateAvatar.close();
    })
})

Promise.all([
  api.getProfile(),
  api.getInitialCards()
])
  .then(([profile, initialCards]) => { //попадаем сюда когда оба промиса будут выполнены
    userInfo.setUserInfo(profile);
    userId = profile._id;
    section.renderAllitems(initialCards);
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
