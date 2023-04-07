import Joi from 'joi';

const id = Joi.number().min(1).max(1000);
const amount = Joi.number().min(1).max(100);
const placa = Joi.string().min(5).max(6);
const marca = Joi.string().min(3).max(20);
const modelo = Joi.string().min(3).max(30);
const costo = Joi.number().min(10000).max(900000);
const disponible = Joi.boolean();

export default {
    onCreate: Joi.object({
        placa: placa.required(),
        marca: marca.required(),
        modelo: modelo.required(),
        costo: costo.required(),
        disponible: disponible.required()
    }),

    onUpdate: Joi.object({
        placa: placa,
        marca: marca,
        modelo: modelo,
        costo: costo,
        disponible: disponible
    }),

    onRequest: Joi.object({
        id: id.required()
    }),

    onReqFaker: Joi.object({
        amount: amount.required()
    })
};