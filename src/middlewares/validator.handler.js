import Boom from '@hapi/boom';

export default function (schema, property){
    return (req, res, next) => {
        const data = req[property];
        const result = schema.validate(data, { abortEarly: false });
        result.error ? next(Boom.badRequest(result.error)) : next();
    }
}