const boom = require('@hapi/boom');

function validator(schema, property){
    return (req, res, next) => {
        const result = schema.validate(req[property]);
        result.error ? next(boom.badRequest(result.error)) : next();
    }
}

module.exports = validator;