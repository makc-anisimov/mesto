export class UserInfo {
  constructor({ selectorName, selectorJob }) {
    this._profileJob = document.querySelector(selectorJob);
    this._profileName = document.querySelector(selectorName);
  }

  getUserInfo() {
    const profileData = {};
    profileData.profileName = this._profileName.textContent;
    profileData.profileJob = this._profileJob.textContent;
    return profileData;
  }

  setUserInfo(newProfileData) {
    this._profileName.textContent = newProfileData.profileName;
    this._profileJob.textContent = newProfileData.profileJob;
  }
}
