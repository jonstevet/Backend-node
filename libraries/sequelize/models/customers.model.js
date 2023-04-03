const { Model, DataTypes } = require("sequelize");

const CustomersSchema = {
   id: {
      field: "ID",
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
   },
   cedula: {
      field: "CEDULA",
      type: DataTypes.BIGINT,
      allowNull: false,
   },
   nombre: {
      field: "NOMBRE",
      type: DataTypes.STRING,
      allowNull: false,
   },
   telefono1: {
      field: "TELEFONO1",
      type: DataTypes.BIGINT,
      allowNull: false,
   },
   telefono2: {
      field: "TELEFONO2",
      type: DataTypes.BIGINT,
      allowNull: false,
   }
};

class Customers extends Model {
   static associate(models) {
      this.hasMany(models.Rents, {as: 'rents', foreignKey: 'customerId'});
   }
   get tableName() {
      return "CLIENTES";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: 'CLIENTES',
         modelName: "Customers",
         timestamps: true,
      };
   }
}

module.exports = { CustomersSchema, Customers };