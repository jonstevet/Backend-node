const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {

    constructor() {
        this.products = this.generateProducts(3);
    }

    //Create products fake
    generateProducts(amount) {
        let products = [];

        for (let i = 0; i < amount; i++) {
            products.push(generateRandomProduct());
        };

        function generateRandomProduct(){
            return {
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: faker.datatype.number(2999999),
                category: faker.datatype.number(30)
            }
        }

        return products;
    }

    async getAll() {
        return new Promise((resolve) => {
            resolve(this.products);
        });
    }

    async getOne(id) {
        return new Promise((resolve) => {
            const product = this.products.find(product => product.id == id);
            resolve(product);
        });
    }

    async getRange(limit, offset){
        return new Promise((resolve) => {
            this.products.slice(parseInt(offset), parseInt(offset) + parseInt(limit));
            resolve(this.products);
        });
    }

    async add(product) {
        return new Promise((resolve) => {
            product = {
                id: faker.datatype.uuid(),
                ...product
            };
            this.products.push(product);
            resolve(product);
        });
    }

    async update(id, data) {
        return new Promise((resolve, reject) => {
            const productToMod = this.products.find(object => object.id == id);
            if (!productToMod) reject(boom.notFound('Product not found'));
            //Modify the object properties key to key
            Object.keys(data).forEach(key => productToMod[key] = data[key]);
            resolve(true);
        });
    }

    async delete(id) {
        return new Promise((resolve, reject) => {
            let productIndex = this.products.findIndex(object => object.id == id);
            if (productIndex == -1) reject(boom.notFound('Product not found'));
            this.products.splice(productIndex, 1);
            resolve(true);
        });
    }
}

module.exports = ProductsService;