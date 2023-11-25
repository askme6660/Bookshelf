/*eslint-disable*/
const {
    addBook,
    getAllBooks,
    getBookbyId,
    editBookbyId,
    deleteBookbyId,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookbyId,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookbyId,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookbyId,
    },
    {
        method: '*',
        path: '/{any*}',
        handler: () => 'Halaman tidak ditemukan',
      },
];

module.exports = routes;