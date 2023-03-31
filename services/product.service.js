const { models } = require('../libraries/sequelize/sequelize.connection');
const { faker } = require('@faker-js/faker');
const Boom = require('@hapi/boom');

class ProductsService {

    constructor() {
    }

    async getAll(limit, offset) {
        if(limit && offset){
            const result = await models.Products.findAll({ offset: offset, limit: limit });
            return result;
        } else {
            const result = await models.Products.findAll();
            return result;
        }
    }

    async getOne(id) {
        const result = await models.Products.findByPk(id);
        if (!result) throw Boom.notFound();
        return result;
    }

    async add(product) {
        const result = await models.Products.create(product);
        return result;
    }

    async update(id, data) {
        const result = await models.Products.update(data , { where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

    async delete(id) {
        const result = await models.Products.destroy({ where: { id: id } });
        if (!result) throw Boom.notFound();
        return result;
    }

   //Create products fake
    async generateProducts(amount) {
        for (let i = 1; i < amount; i++) {
            await models.Products.create(generateRandomProduct());
        };
        function generateRandomProduct(){
            return {
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                image: faker.image.imageUrl(),
                price: faker.datatype.number(999999),
                category: faker.datatype.uuid(),
                subCategory: faker.datatype.uuid(),
                createdBy: faker.datatype.uuid()
            }
        }
        return 'Products created';
    }
}

module.exports = ProductsService;