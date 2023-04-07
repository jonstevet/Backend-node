import express from 'express';

import carsRoute from './destinations/cars.route.js';
import rentsRoute from './destinations/rents.route.js';
import paysRoute from './destinations/pays.route.js';
import customersRoute from './destinations/customers.route.js';


export default function (app) {
    //Home endpoint
    app.get('/', (req, res) => {
        res.send('Backend server running and ready for requests.');
    });
    //sub routes endponits
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/cars', carsRoute);
    router.use('/rents', rentsRoute);
    router.use('/pays', paysRoute);
    router.use('/customers', customersRoute);
}