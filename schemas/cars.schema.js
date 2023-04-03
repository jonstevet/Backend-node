const Joi = require('joi');

const id = Joi.number().min(1).max(1000);
const amount = Joi.number().min(1).max(100);
const placa = Joi.string().min(5).max(6);
const marca = Joi.string().min(3).max(20);
const modelo = Joi.string().min(3).max(30);
const costo = Joi.number().min(10000).max(900000);
const disponible = Joi.boolean();
const since = Joi.date();

const onCreate = Joi.object({
    placa: placa.required(),
    marca: marca.required(),
    modelo: modelo.required(),
    costo: costo.required(),
    disponible: disponible.required()
});

const onUpdate = Joi.object({
    placa: placa,
    marca: marca,
    modelo: modelo,
    costo: costo,
    disponible: disponible
});

const onRequest = Joi.object({
    id: id.required()
});

const onReqFaker = Joi.object({
    amount: amount.required()
});

const carsSchema = {onCreate, onUpdate, onRequest, onReqFaker};

module.exports = carsSchema;