require('dotenv').config()

export const findBookByTitle = (title) =>
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.REACT_APP_API_KEY}`, {
    }).then(response => response.json());

export function findBookById(bookId) {
    let API_URL = 'https://www.googleapis.com/books/v1/volumes/' + bookId
    console.log(API_URL)
    return fetch(API_URL)
        .then(response => response.json())
}

const api = {
    findBookByTitle,
    findBookById
}

export default api;
