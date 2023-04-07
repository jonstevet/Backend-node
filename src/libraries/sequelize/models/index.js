import { CarsSchema, Cars } from "./cars.model.js";
import { RentsSchema, Rents } from "./rents.model.js";
import { PaysSchema, Pays } from "./pays.model.js";
import { CustomersSchema, Customers } from "./customers.model.js";

export default function (sequelize) {
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