export class UserInfo {
  constructor({ selectorName, selectorJob, selectorAvatarPhoto }) {
    this._profileJob = document.querySelector(selectorJob);
    this._profileName = document.querySelector(selectorName);
    this._Avatar = document.querySelector(selectorAvatarPhoto);
    // this._profileId =
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
    this._Avatar.src = avatar;

    console.log('this._Avatar', this._Avatar);
  }
}
