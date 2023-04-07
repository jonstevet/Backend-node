import Boom from '@hapi/boom';
import {faker} from '@faker-js/faker';

import sequelize from '../libraries/sequelize/sequelize.connection.js';

const models = sequelize.models;

export default class paysService {

    async getAll(limit, offset) {
        if(limit && offset){
            const result = await models.Pays.findAll({ offset: offset, limit: limit });
            return result;
        } else {
            const result = await models.Pays.findAll();
            return result;
        }
    }

    async getOne(id) {
        const result = await models.Pays.findByPk(id);
        if (!result) throw Boom.notFound();
        return result;
    }

    async add(product) {
        const result = await models.Pays.create(product);
        return result;
    }

    async update(id, data) {
        const result = await models.Pays.update(data , { where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

    async delete(id) {
        const result = await models.Pays.destroy({ where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

   //Create products fake
    async generateFaker(amount) {
        const quantityRequest = typeof amount == 'string' ? parseInt(amount) : amount;
        let step = 1;
        do {
            await models.Pays.create(generateRandom());
            step++;
        } while ( step <= quantityRequest);

        function generateRandom(){
            return {
                fecha: faker.date.past(2),
                valor: faker.finance.amount(100000, 999999, 0),
                rentId: faker.datatype.number({ min: 1, max: 20}),
            }
        }
        return 'Pays created';
    }
}