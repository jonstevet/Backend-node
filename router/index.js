const express = require('express');

function router(app) {
    //Home endpoint
    app.get('/', (req, res) => {
        res.send('Backend server running and ready for requests.');
    });
    //sub routes endponits
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/cars', require('./destinations/cars.route'));
    router.use('/rents', require('./destinations/rents.route'));
    router.use('/pays', require('./destinations/pays.route'));
    router.use('/customers', require('./destinations/customers.route'));
}

module.exports = router;
