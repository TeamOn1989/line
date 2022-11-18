const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

const CONFIG = {
    url: ' https://api.react-learning.ru',
    headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzljZjQiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDYsImV4cCI6MTY5OTQ0Nzk0Nn0.IPtrTJqMg-rt3gio5BYtTndEX-rC8_OtizTjYEaovXs',
    }
}


class Api {
    constructor({headers, url}) {
        this._headers = headers;
        this._url = url;
    }

    getAllPosts() {
        return fetch(`${this._url}/posts`, {
            headers: this._headers,            
        }).then(onResponce)
    }

    getAllComments() {
        return fetch(`${this._url}/posts/comments`, {
            headers: this._headers,
        }).then(onResponce)
    }
}


const api = new Api(CONFIG)

export default api