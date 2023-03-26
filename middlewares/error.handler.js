function errorLogger(err, req, res, next){
    console.error('Error-Logger: ', err.message);
    next(err);
}

function boomErrorHandler(err, req, res, next){
    if (err.isBoom) {
        const { statusCode, payload } = err.output;
        res.status(statusCode).json(payload);
    } else {
        next(err);
    }
}

function errorServer(err, req, res, next){
    res.status(500).json({
        code: 500,
        message: err.message
    });
}


module.exports = { errorLogger, errorServer, boomErrorHandler };