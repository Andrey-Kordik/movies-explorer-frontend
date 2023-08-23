class MoviesApi {
    constructor({ url, headers }) {
        this.url = url;
        this.headers = headers;
    }

    getMovies() {
        return fetch(`${this.url}/beatfilm-movies`, {
            headers: this.headers,
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

}

export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json'
    }
});