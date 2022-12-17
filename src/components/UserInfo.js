export class UserInfo {
  constructor({ selectorName, selectorJob, selectorAvatarPhoto }) {
    this._profileJob = document.querySelector(selectorJob);
    this._profileName = document.querySelector(selectorName);
    this._avatar = document.querySelector(selectorAvatarPhoto);
  }

  getUserInfo() {
    const profileData = {};
    profileData.profileName = this._profileName.textContent;
    profileData.profileJob = this._profileJob.textContent;

    return profileData;
  }

  setUserInfo({name, about, avatar, _id}) {
    this._profileName.textContent = name;
    this._profileJob.textContent = about;
    this._avatar.src = avatar;
  }
}
