const boom = require('@hapi/boom');

function val(schema, property){
    return (req, res, next) => {
        const result = schema.validate(req[property]);
        result.error ? next(boom.badRequest(result.error)) : next();
    }
}

module.exports = val;