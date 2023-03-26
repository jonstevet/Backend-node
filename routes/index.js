/**
 * Router function for express
 *
 * @param {*} app
*/

const express = require('express');


function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/products', require('./products.route'));
    router.use('/categories', require('./categories.route'));
    router.use('/users', require('./users.route'));

}

module.exports = routerApi;