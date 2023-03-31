const Joi = require('joi');

const uuid = Joi.string().guid({ version: ['uuidv4']});
const id = Joi.number().min(1).max(1000);
const name = Joi.string().min(3).max(100);
const description = Joi.string().min(30).max(500);
const price = Joi.number().min(1000).max(999999);
const reference = Joi.string().min(3).max(100);
const subCategory = uuid;
const image = Joi.string().uri().max(300);
const createdBy = uuid;
const updatedBy = uuid;


const onCreate = Joi.object({
    name: name.required(),
    description: description.required(),
    price: price.required(),
    reference: reference.required(),
    subCategory: subCategory.required(),
    image: image,
    createdBy: createdBy.required()
}).options({
    abortEarly: false,
});

const onUpdate = Joi.object({
    name: name,
    description: description,
    price: price,
    reference: reference,
    subCategory: subCategory,
    image: image,
    updatedBy: updatedBy.required()
}).options({
    abortEarly: false,
});

const onRequest = Joi.object({
    id: id.required()
}).options({
    abortEarly: false,
});

const userSchema = [onCreate, onUpdate, onRequest];

module.exports = userSchema;