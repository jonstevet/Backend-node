const { CarsSchema, Cars } = require("./cars.model");
const { RentsSchema, Rents } = require("./rents.model");
const { PaysSchema, Pays } = require("./pays.model");
const { CustomersSchema, Customers } = require("./customers.model");

function setupModels(sequelize) {
   //Tables
   Cars.init(CarsSchema, Cars.config(sequelize));
   Rents.init(RentsSchema, Rents.config(sequelize));
   Pays.init(PaysSchema, Pays.config(sequelize));
   Customers.init(CustomersSchema, Customers.config(sequelize));

   //Associations
   Cars.associate(sequelize.models);
   Rents.associate(sequelize.models);
   Pays.associate(sequelize.models);
   Customers.associate(sequelize.models);
}

module.exports = setupModels;
