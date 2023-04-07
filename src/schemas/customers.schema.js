import Joi from 'joi';

const id = Joi.number().min(1).max(1000);
const amount = Joi.number().min(1).max(100);
const cedula = Joi.number().min(10000000).max(9000000000).unsafe();
const nombre = Joi.string().min(3).max(40);
const telefono1 = Joi.number().min(3000000000).max(6099999999);
const telefono2 = Joi.number().min(3000000000).max(6099999999);

export default {
    onCreate: Joi.object({
        cedula: cedula.required(),
        nombre: nombre.required(),
        telefono1: telefono1.required(),
        telefono2: telefono2.required()
    }),

    onUpdate: Joi.object({
        cedula: cedula,
        nombre: nombre,
        telefono1: telefono1,
        telefono2: telefono2
    }),

    onRequest: Joi.object({
        id: id.required()
    }),

    onReqFaker: Joi.object({
        amount: amount.required()
    })
};