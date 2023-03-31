const record = require('../services/logger.service');
const { ValidationError } = require('sequelize');
const Boom = require('@hapi/boom');

function errorLogger(err, req, res, next){
    const { statusCode, payload } = err.output;
    record.error(`${req.method},${req.url},${statusCode || 500},${payload.message || err.message}`);
    next(err);
}

function boomErrorHandler(err, req, res, next){
    if (err.isBoom) {
        const { statusCode, payload } = err.output;
        res.status(statusCode).json(payload);
    } else if(err.isServer){
        const { statusCode, payload } = err.output;
        res.status(statusCode).json(payload);
    } else {
        next(err);
    }
}

function ormErrorHandler(err, req, res, next){
    if (err instanceof ValidationError) {
        const boomError = Boom.conflict(err.name, err.errors);
        boomErrorHandler(boomError, req, res, next);
    } else {
        next(err);
    }
}

function errorServer(err, req, res, next){
    const boomError = Boom.boomify(err, { statusCode: 500 });
    boomErrorHandler(boomError, req, res, next);
}

module.exports = { errorLogger, errorServer, boomErrorHandler, ormErrorHandler };