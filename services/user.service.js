const { models } = require("../libraries/sequelize/sequelize.connection");
const { faker } = require("@faker-js/faker");
const Boom = require("@hapi/boom");

class UsersService {

   constructor() {
      this.dbTable = models.Users;
   }

   async getAll(limit, offset) {
      if (limit && offset) {
         const result = await this.dbTable.findAll({offset: offset, limit: limit});
         return result;
      } else {
         const result = await this.dbTable.findAll();
         return result;
      }
   }

   async getOne(id) {
      const result = await this.dbTable.findByPk(id);
      if (!result) throw Boom.notFound();
      return result;
   }

   async add(product) {
      const result = await this.dbTable.create(product);
      return result;
   }

   async update(id, data) {
      const result = await this.dbTable.update(data, {where: {id: id}});
      if (!result) throw Boom.notFound();
      return result;
   }

   async delete(id) {
      const result = await this.dbTable.destroy({where: {id: id}});
      if (!result) throw Boom.notFound();
      return result;
   }

   //Create fake items
   async generateFaker(amount) {
      for (let i = 1; i < amount; i++) {
         await this.dbTable.create(generateRandom());
      }
      function generateRandom() {
         return {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
         };
      }
      return "Fake items created";
   }
}

module.exports = UsersService;