import Joi from 'joi';

const id = Joi.number().min(1).max(1000);
const amount = Joi.number().min(1).max(100);
const fecha = Joi.date();
const valor = Joi.number().min(10000).max(900000);
const rentId = Joi.number().min(1).max(1000);

export default {
    onCreate: Joi.object({
        fecha: fecha.required(),
        valor: valor.required(),
        rentId: rentId.required()
    }),

    onUpdate: Joi.object({
        fecha: fecha,
        valor: valor,
        rentId: rentId
    }),

    onRequest: Joi.object({
        id: id.required()
    }),

    onReqFaker: Joi.object({
        amount: amount.required()
    })
};