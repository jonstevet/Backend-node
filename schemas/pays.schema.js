const Joi = require('joi');

const id = Joi.number().min(1).max(1000);
const amount = Joi.number().min(1).max(100);
const fecha = Joi.date();
const valor = Joi.number().min(10000).max(900000);
const rentId = Joi.number().min(1).max(1000);

const onCreate = Joi.object({
    fecha: fecha.required(),
    valor: valor.required(),
    rentId: rentId.required()
});

const onUpdate = Joi.object({
    fecha: fecha,
    valor: valor,
    rentId: rentId
});

const onRequest = Joi.object({
    id: id.required()
});

const onReqFaker = Joi.object({
    amount: amount.required()
});

const paysSchema = {onCreate, onUpdate, onRequest, onReqFaker};

module.exports = paysSchema;