import Boom from '@hapi/boom';
import {faker} from '@faker-js/faker';

import sequelize from '../libraries/sequelize/sequelize.connection.js';

const models = sequelize.models;

export default class customersService {

    async getAll(limit, offset) {
        if(limit && offset){
            const result = await models.Customers.findAll({ offset: offset, limit: limit });
            return result;
        } else {
            const result = await models.Customers.findAll();
            return result;
        }
    }
    

    async getOne(id) {
        const result = await models.Customers.findByPk(id);
        if (!result) throw Boom.notFound();
        return result;
    }

    async add(product) {
        const result = await models.Customers.create(product);
        return result;
    }

    async update(id, data) {
        const result = await models.Customers.update(data , { where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

    async delete(id) {
        const result = await models.Customers.destroy({ where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

   //Create products fake
    async generateFaker(amount) {
        const quantityRequest = typeof amount == 'string' ? parseInt(amount) : amount;
        let step = 1;
        do {
            await models.Customers.create(generateRandom());
            step++;
        } while ( step <= quantityRequest);

        function generateRandom(){
            return {
                cedula: faker.datatype.number({min: 20000000, max: 9999999999}),
                nombre: faker.name.fullName(),
                telefono1: faker.phone.number('3#########'),
                telefono2: faker.phone.number('60########')
            }
        }
        return 'Customers created';
    }
}