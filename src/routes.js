const { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require("./handler");

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: () => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    },
    {
        method: '*',
        path: '/{any*}',
        handler: () => {
            return 'Page not found.';
        },
    },
];

module.exports = routes;