(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n);if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key,"string"),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._buttonSaveForm=this._form.querySelector(this._submitButtonSelector)}var n,r;return n=t,(r=[{key:"_showInputError",value:function(t){t.classList.add(this._inputErrorClass),this._form.querySelector("#".concat(t.id,"-error")).textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){t.classList.remove(this._inputErrorClass),this._form.querySelector("#".concat(t.id,"-error")).textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_disableButton",value:function(){this._buttonSaveForm.setAttribute("disabled",!0),this._buttonSaveForm.classList.add(this._inactiveButtonClass)}},{key:"_enableButton",value:function(){this._buttonSaveForm.removeAttribute("disabled"),this._buttonSaveForm.classList.remove(this._inactiveButtonClass)}},{key:"checkButtonOpen",value:function(){this._form.checkValidity()?this._enableButton():this._disableButton()}},{key:"eraseForm",value:function(){var t=this;this._form.querySelectorAll(this._inputSelector).forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){var t=this;this._form.addEventListener("input",(function(e){t._isValid(e.target),t.checkButtonOpen()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key,"string"),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._containerElements=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderAllitems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._containerElements.prepend(t)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u=document.forms.formEditProfile,a=document.forms.formAddPhoto,c=document.forms.formUpdateAvatar,l=document.querySelector(".profile__edit"),s=document.querySelector(".profile__add-button"),f=document.querySelector(".profile__photo"),p={formSelector:".popup__form",inputSelector:".popup__input-form",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input-form_error",errorClass:".popup__error_visible"};function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function d(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===y(e)?e:String(e)}var v=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=d(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()})),this._popup.addEventListener("mousedown",(function(e){e.currentTarget===e.target&&t.close()}))}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===b(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=S(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function S(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function g(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._popupForm=n._popup.querySelector(".popup__form"),n._handleSubmitForm=e,n._inputList=n._popupForm.querySelectorAll(".popup__input-form"),n._saveButton=n._popupForm.querySelector(".popup__save-button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;_(w(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t.buttonTextLoading(),t._handleSubmitForm(t._getInputValues())}))}},{key:"resetForm",value:function(){this._popupForm.reset()}},{key:"close",value:function(){this._popupForm.reset(),_(w(u.prototype),"close",this).call(this)}},{key:"buttonTextLoading",value:function(){this._saveButtonText=this._saveButton.textContent,this._saveButton.textContent="Сохранение..."}},{key:"buttonTextSave",value:function(){this._saveButton.textContent=this._saveButtonText}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===O(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=L(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function L(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function T(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._popupForm=n._popup.querySelector(".popup__form"),n._handleSubmitForm=e,n._saveButton=n._popupForm.querySelector(".popup__save-button"),n._saveButtonText=n._saveButton.textContent,n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;j(B(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t.buttonTextLoading(),t._handleSubmitForm(t._idDeletedCard,t._deletedCard)}))}},{key:"open",value:function(t,e){this._idDeletedCard=t,this._deletedCard=e,j(B(u.prototype),"open",this).call(this)}},{key:"buttonTextLoading",value:function(){this._saveButton.textContent="Сохранение..."}},{key:"buttonTextSave",value:function(){this._saveButton.textContent=this._saveButtonText}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===x(o)?o:String(o)),r)}var o}var q=function(){function t(e){var n=e.selectorName,r=e.selectorJob,o=e.selectorAvatarPhoto;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileJob=document.querySelector(r),this._profileName=document.querySelector(n),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){var t={};return t.profileName=this._profileName.textContent,t.profileJob=this._profileJob.textContent,t}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;t._id,this._profileName.textContent=e,this._profileJob.textContent=n,this._avatar.src=r}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===D(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=U(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function U(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},V(t,e)}function N(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(r);if(o){var n=J(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return N(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPhoto=e._popup.querySelector(".popup__photo-opened"),e._popupTitle=e._popup.querySelector(".popup__photo-title"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._popupTitle.textContent=e,this._popupPhoto.src=n,this._popupPhoto.alt=e,A(J(u.prototype),"open",this).call(this)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===M(o)?o:String(o)),r)}var o}var $=function(){function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._card=document.querySelector(n).content.querySelector(".element").cloneNode(!0),this._cardPhoto=this._card.querySelector(".element__photo"),this._cardTitle=this._card.querySelector(".element__title"),this._cardLikeButton=this._card.querySelector(".element__like"),this._cardRemoveButton=this._card.querySelector(".element__delete-button"),this._handleCardClick=r,this._handleDeleteClick=o,this._handleLikeClick=i,this._countLikesElement=this._card.querySelector(".element__like-count"),this._cardDeleteButton=this._card.querySelector(".element__delete-button")}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this._cardLikeButton.addEventListener("click",(function(){t._handleLikeClick(t._id)})),this._cardRemoveButton.addEventListener("click",(function(){t._handleDeleteClick(t._id)})),this._cardPhoto.addEventListener("click",(function(){t._handleOpenPhoto()}))}},{key:"_handleAddLikePhoto",value:function(){this._cardLikeButton.classList.add("element__like_active")}},{key:"_handleRemoveLikePhoto",value:function(){this._cardLikeButton.classList.remove("element__like_active")}},{key:"isLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._userId}))}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"_handleOpenPhoto",value:function(){this._handleCardClick({name:this._name,link:this._link})}},{key:"setLikes",value:function(t){this._likes=t,this._countLikesElement.textContent=this._likes.length,this._cardLikeButton.classList.toggle("element__like_active",this.isLiked())}},{key:"getRenderedCard",value:function(){return this._cardTitle.textContent=this._name,this._cardPhoto.src=this._link,this._cardPhoto.alt=this._name,this._setEventListeners(),this.setLikes(this._likes),this._userId!==this._ownerId&&this._cardDeleteButton.classList.add("element__delete-button_hidden"),this._card}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===G(o)?o:String(o)),r)}var o}var Q,W=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=r,this._baseUrl=n}var e,n;return e=t,(n=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject(t.status)}},{key:"getProfile",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"edtiProfile",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then((function(t){return n._getResponseData(t)}))}},{key:"updateAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._getResponseData(t)}))}},{key:"addCard",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/cards "),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return n._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"addLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}}])&&K(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"b1e741c7-60c4-4f43-a930-80a1fe61268c","Content-Type":"application/json"}});function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Y=new n(p,u),Z=new n(p,a),tt=new n(p,c),et=new i((function(t){var e=rt(t);et.addItem(e)}),".elements__list"),nt=function(t){return{name:t.name,link:t.link,likes:t.likes,id:t._id,userId:Q,ownerId:t.owner._id}},rt=function(t){var e=new $(t,".element-template",(function(t){it.open(t)}),(function(t){ct.open(t,e)}),(function(t){e.isLiked()?W.deleteLike(t).then((function(t){e.setLikes(t.likes)})).catch((function(t){return console.log("Ошибка: ".concat(t))})):W.addLike(t).then((function(t){e.setLikes(t.likes)})).catch((function(t){return console.log("Ошибка: ".concat(t))}))}));return e.getRenderedCard()},ot=new P(".popup_type_profile-edit",(function(t){W.edtiProfile(t.profileName,t.profileJob).then((function(t){ut.setUserInfo(t),ot.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){ot.buttonTextSave()}))})),it=new H(".popup_wiew-photo"),ut=new q({selectorName:".profile__name",selectorJob:".profile__job",selectorAvatarPhoto:".profile__photo"}),at=new P(".popup_type_add-photo",(function(t){W.addCard(t.mestoName,t.mestoLink).then((function(t){var e=rt(nt(t));et.addItem(e),at.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){at.buttonTextSave()}))})),ct=new R(".popup_type_confirm",(function(t,e){W.deleteCard(t).then((function(){e.deleteCard(),ct.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){ct.buttonTextSave()}))})),lt=new P(".popup_type_update-avatar",(function(t){var e=t.AvatarLink;W.updateAvatar(e).then((function(t){ut.setUserInfo(t),lt.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){lt.buttonTextSave()}))}));Promise.all([W.getProfile(),W.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ut.setUserInfo(o),Q=o._id,et.renderAllitems(i.map(nt))})).catch((function(t){return console.log("Ошибка: ".concat(t))})),Y.enableValidation(),Z.enableValidation(),tt.enableValidation(),ot.setEventListeners(),at.setEventListeners(),it.setEventListeners(),ct.setEventListeners(),lt.setEventListeners(),l.addEventListener("click",(function(){Y.eraseForm(),ot.setInputValues(ut.getUserInfo()),Y.checkButtonOpen(),ot.open()})),s.addEventListener("click",(function(){Z.eraseForm(),Z.checkButtonOpen(),at.open()})),f.addEventListener("click",(function(){tt.eraseForm(),tt.checkButtonOpen(),lt.open()}))})();