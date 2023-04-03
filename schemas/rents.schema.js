const Joi = require('joi');

const id = Joi.number().min(1).max(1000);
const amount = Joi.number().min(1).max(100);
const fecha = Joi.date();
const tiempo = Joi.number().min(1).max(30);
const valorTotal = Joi.number().min(10000).max(900000);
const saldo = Joi.number().min(10000).max(900000);
const abonoInicial = Joi.number().min(10000).max(900000);
const devuelto = Joi.boolean();
const carId = Joi.number().min(1).max(1000);
const customerId = Joi.number().min(1).max(1000);
const dateinit = Joi.date();
const dateend = Joi.date();

const onCreate = Joi.object({
    fecha: fecha.required(),
    tiempo: tiempo.required(),
    valorTotal: valorTotal.required(),
    saldo: saldo.required(),
    abonoInicial: abonoInicial.required(),
    devuelto: devuelto.required(),
    carId: carId.required(),
    customerId: customerId.required()
});

const onUpdate = Joi.object({
    fecha: fecha,
    tiempo: tiempo,
    valorTotal: valorTotal,
    saldo: saldo,
    abonoInicial: abonoInicial,
    devuelto: devuelto,
    carId: carId,
    customerId: customerId
});

const onRequest = Joi.object({
    id: id.required()
});

const onReqFaker = Joi.object({
    amount: amount.required()
});

const onReqRentTable = Joi.object({
    dateinit: dateinit.required(),
    dateend: dateend.required()
});

const rentsSchema = {onCreate, onUpdate, onRequest, onReqFaker, onReqRentTable};

module.exports = rentsSchema;