const Joi = require('joi');

const id = Joi.string().guid({ version: ['uuidv4']});
const name = Joi.string().min(3).max(100);
const description = Joi.string().min(30).max(200);
const price = Joi.number().min(1000).max(2999999);
const category = Joi.number().min(1).max(30);

const creProSch = Joi.object({
    name: name.required(),
    description: description.required(),
    price: price.required(),
    category: category.required()
}).options({
    abortEarly: false,
});

const updProSch = Joi.object({
    name: name,
    description: description,
    price: price,
    category: category
}).options({
    abortEarly: false,
});

const oneProSch = Joi.object({
    id: id.required()
}).options({
    abortEarly: false,
});

module.exports = { creProSch, updProSch, oneProSch };