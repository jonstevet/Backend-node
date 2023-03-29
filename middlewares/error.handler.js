const record = require('../services/logger.service');

function errorLogger(err, req, res, next){
    record.error(err.message);
    next(err);
}

function boomErrorHandler(err, req, res, next){
    if (err.isBoom) {
        const { statusCode, payload } = err.output;
        res.status(statusCode).json(payload);
        record.error(`${req.method},${req.url},${statusCode},${payload.message}`);
    } else {
        next(err);
    }
}

function errorServer(err, req, res, next){
    record.error(`${req.method},${req.url},500,${err.message}`);
    res.status(500).json({ code: 500, message: err.message });
}

module.exports = { errorLogger, errorServer, boomErrorHandler };