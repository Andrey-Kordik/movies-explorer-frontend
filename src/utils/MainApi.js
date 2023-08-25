class MainApi {
    constructor({ url, headers }) {
        this.url = url;
        this.headers = headers;
    }

    getUserData() {
      return fetch(`${this.url}/users/me`, {
          method: "GET",
          headers: this.headers,
          credentials: 'include',
      })
          .then(res => {
              return this._checkResult(res)
          })
  }


  editUserData({ name, email }) {
    return fetch(`${this.url}/users/me`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({ name: name, email: email }),
        credentials: 'include',
    })
        .then(res => {
            return this._checkResult(res)
        })
}

    register(name, email, password) {
        return fetch(`${this.url}/signup`, {
          method: 'POST',
          headers: this.headers,
          credentials: 'include',
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          })
        })
          .then(res => {
            return this._checkResult(res)
          })
      }

      

      logout () {
        return fetch(`${this.url}/signout`, {
          method: 'GET',
          headers: this.headers,
          credentials: 'include',
        })
        .then(res => {
          return this._checkResult(res)
        })
      };


      
  authorize(email, password) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        password: password,
        email: email,
      })
    })
      .then(res => {
        return this._checkResult(res)
      })
  }



  checkToken() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: this.headers,
      credentials: 'include',
      
    })
      .then(res => {
        return this._checkResult(res)
      })
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`)
  }

  getSavedMovies() {
    return fetch (`${this.url}/movies`, { 
      method: 'GET',
      headers: this.headers,
      credentials: 'include',
     })
     .then(res => {
      return this._checkResult(res)
    })
  }


  addMovies(data) {
  return fetch (`${this.url}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
      credentials: 'include',
    })
    .then(res => {
      return this._checkResult(res)
    })
  }


  deleteMovies(id) {
    return fetch (`${this.url}/movies/${id}`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    })
    .then(res => {
      return this._checkResult(res)
    })
  }
}

export const mainApi = new MainApi({
    url: 'api.domain.kordik.diploma.nomoredomains.xyz',
    headers: {
        'Content-Type': 'application/json'
    }
});