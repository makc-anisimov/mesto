class Api {
    constructor(options) {
      // тело конструктора
    }

    getProfile() {

    }


    getInitialCards() {
      // ...
    }

    edtiProfile() {

    }

    addCard() {

    }

    getLikes() {

    }

    deleteCard() {

    }

    addLike() {

    }

    deleteLike() {


    }
    // другие методы работы с API
  }

  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
    headers: {
      authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
      'Content-Type': 'application/json'
    }
  });
