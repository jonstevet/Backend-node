import Boom from '@hapi/boom';
import {faker} from '@faker-js/faker';

import sequelize from '../libraries/sequelize/sequelize.connection.js';

const models = sequelize.models;

export default class carsService {

    async getAll(limit, offset) {
        if(limit && offset){
            const result = await models.Cars.findAll({ offset: offset, limit: limit });
            return result;
        } else {
            const result = await models.Cars.findAll();
            return result;
        }
    }

    async getOne(id) {
        const result = await models.Cars.findByPk(id);
        if (!result) throw Boom.notFound();
        return result;
    }

    async add(product) {
        const result = await models.Cars.create(product);
        return result;
    }

    async update(id, data) {
        const result = await models.Cars.update(data , { where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

    async delete(id) {
        const result = await models.Cars.destroy({ where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

   //Create products fake
    async generateFaker(amount) {
        const quantityRequest = typeof amount == 'string' ? parseInt(amount) : amount;
        let step = 1;
        do {
            await models.Cars.create(generateRandom());
            step++;
        } while ( step <= quantityRequest);

        function generateRandom(){
            return {
                placa: faker.random.alphaNumeric(6),
                marca: faker.vehicle.manufacturer(),
                modelo: faker.vehicle.model(),
                costo: faker.datatype.number(99999),
                disponible: faker.datatype.boolean()
            }
        }
        return 'Cars created';
    }
}