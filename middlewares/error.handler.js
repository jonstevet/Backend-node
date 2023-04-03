const record = require('../services/logger.service');
const { ValidationError } = require('sequelize');
const Boom = require('@hapi/boom');


function logger(err, req, res, next){
    if (err.output){
        const { statusCode, payload } = err.output;
        record.error(`${req.method},${req.url},${statusCode || 500},${payload.message || err.message}`);
    } else {
        record.error(`${req.method},${req.url},${500},${err.message}`);
    }
    next(err);
}

function boom(err, req, res, next){
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

function orm(err, req, res, next){
    if ((err.name).includes('Sequelize')) {
        const boomError = Boom.conflict(err.parent.detail);
        boom(boomError, req, res, next);
    } else {
        next(err);
    }
}

function server(err, req, res, next){
    console.log(err);
    const boomError = Boom.boomify(err, { statusCode: 500 });
    boom(boomError, req, res, next);
}

const errorHandler = {logger, boom, orm, server};

module.exports = errorHandler;