class Api {
  constructor(
    base_url = 'https://localhost:3000'
  ) {
    this.base_url = base_url;


  }

  login(username, password) {
    return fetch(this.base_url + '/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ username, password })
    })
      .then(responseHandler);
  }

  loadStartPage() {

    return fetch(this.base_url + '/test/startPage')
      .then(responseHandler);
  }

  loadQuestions() {

    return fetch(this.base_url + '/test/questions')
      .then(responseHandler);
  }

  sendResults() {

    return fetch(this.base_url + '/test/answers', { method: 'POST' })
      .then(responseHandler);
  }

  getToken() {
    return fetch(this.base_url + '/users/token').then(responseHandler);
  }
}

function responseHandler(response) {
  let ok = response.ok;
  let message = response.statusText;

  return response.json()
    .then(response => {
      if (ok) {
        return response;
      } else {
        throw { message };
      }
    });
}