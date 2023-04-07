import Boom from "@hapi/boom";

// CORS, domain access control allow only whitelist
const whitelist = [
    undefined,
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:4200',
    'http://127.0.0.1:80',
    'http://localhost:80'
];

export default {
    origin: (origin, callback) => {
        if (whitelist.some((item) => item == origin)) {
            callback(null, true);
        } else {
            callback(Boom.unauthorized(`Domain: ${origin}, is not allowed.`));
        }
    },
};
