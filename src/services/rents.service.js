import Boom from '@hapi/boom';
import {faker} from '@faker-js/faker';
import { Sequelize, Op } from 'sequelize';

import sequelize from '../libraries/sequelize/sequelize.connection.js';

const models = sequelize.models;

export default class RentsService {
    async getAll(limit, offset) {
        if (limit && offset) {
            const result = await models.Rents.findAll({
                offset: offset,
                limit: limit,
            });
            return result;
        } else {
            const result = await models.Rents.findAll();
            return result;
        }
    }

    async getAllTableRent(dateinit, dateend) {
        const dateInit = dateinit || '2000-01-01';
        const dateEnd = dateend || new Date();

        const result = await models.Rents.findAll({
            attributes: ['fecha', 'tiempo', 'saldo'],
            where: {
                fecha: {
                    [Op.between]: [dateInit, dateEnd],
                },
            },
            include: [
                {
                    model: models.Cars,
                    as: 'carro',
                    attributes: ['placa', 'marca'],
                },
                {
                    model: models.Customers,
                    as: 'cliente',
                    attributes: ['cedula', 'nombre'],
                },
            ],
        });
        return result;
    }

    async getCount() {
        const result = await models.Rents.findAll({
            attributes: [
                [
                    Sequelize.fn(
                        'EXTRACT',
                        Sequelize.literal('MONTH FROM "FECHA"'),
                    ),
                    'mes',
                ],
                [
                    Sequelize.fn(
                        'EXTRACT',
                        Sequelize.literal('DAY FROM "FECHA"'),
                    ),
                    'dia',
                ],
            ],
            group: [
                Sequelize.fn(
                    'EXTRACT',
                    Sequelize.literal('MONTH FROM "FECHA"'),
                ),
                Sequelize.fn('EXTRACT', Sequelize.literal('DAY FROM "FECHA"')),
            ],
        });
        return result;
    }

    async getOne(id) {
        const result = await models.Rents.findByPk(id);
        if (!result) throw Boom.notFound();
        return result;
    }

    async add(product) {
        const result = await models.Rents.create(product);
        return result;
    }

    async update(id, data) {
        const result = await models.Rents.update(data, { where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

    async delete(id) {
        const result = await models.Rents.destroy({ where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

    //Create products fake
    async generateFaker(amount) {
        const quantityRequest =
            typeof amount == 'string' ? parseInt(amount) : amount;
        let step = 1;
        do {
            await models.Rents.create(generateRandom());
            step++;
        } while (step <= quantityRequest);

        function generateRandom() {
            return {
                fecha: faker.date.past(),
                tiempo: faker.datatype.number(30),
                valorTotal: faker.finance.amount(600000, 999999, 0),
                saldo: faker.finance.amount(300000, 600000, 0),
                abonoInicial: faker.finance.amount(100000, 300000, 0),
                devuelto: faker.datatype.boolean(),
                carId: faker.datatype.number({ min: 1, max: 20 }),
                customerId: faker.datatype.number({ min: 1, max: 20 }),
            };
        }
        return 'Rents created';
    }
}