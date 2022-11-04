
import { settingsForm as settings } from "./consts.js";
import {
  checkButtonOpenPopup,
  isValid
 } from "./utils.js";



export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  enableValidation() {
    this._form.addEventListener('input', (evt) => {
      // const currentForm = evt.currentTarget;    <= this._form
      isValid(evt.target, settings.inputErrorClass);
      this._checkButtonOpen();
    });
  }

  _checkButtonOpen() {
    checkButtonOpenPopup(this._form);
  }
  _isValid() {

  }

  // console.log('проверка формы');
  // console.log(this);




}



// function enableValidation(settings) {
//   const popupFormList = document.querySelectorAll(settings.formSelector); //список всех форм
//   popupFormList.forEach(function (element) {
//     element.addEventListener('input', (evt) => {
//       const currentForm = evt.currentTarget;
//       isValid(evt.target, settings.inputErrorClass);
//       checkButtonOpenPopup(currentForm);
//     });
//   }, settings)
// }

// function isValid(input, nameInputFormErrorClass) {
//   if (!input.validity.valid) {
//     showInputError(input, nameInputFormErrorClass)
//   }
//   else hideInputError(input, nameInputFormErrorClass)
// }
