const Joi = require('joi');

const uuid = Joi.string().guid({ version: ['uuidv4']});
const id = Joi.number().min(1).max(1000);
const name = Joi.string().min(3).max(100);
const description = Joi.string().min(30).max(500);
const price = Joi.number().min(1000).max(999999);
const category = Joi.number().min(1).max(30);
const image = Joi.string().uri().max(300);
const createdBy = Joi.string().min(3).max(50);
const updatedBy = Joi.string().min(3).max(50);
const updatedAt = Joi.date().iso();


const creProSch = Joi.object({
    name: name.required(),
    description: description.required(),
    price: price.required(),
    category: category.required(),
    image: image,
    createdBy: createdBy.required(),
}).options({
    abortEarly: false,
});

const updProSch = Joi.object({
    name: name,
    description: description,
    price: price,
    category: category,
    image: image,
    updatedBy: updatedBy.required(),
    updatedAt: updatedAt.required(),
}).options({
    abortEarly: false,
});

const oneProSch = Joi.object({
    id: id.required(),
}).options({
    abortEarly: false,
});

module.exports = { creProSch, updProSch, oneProSch };