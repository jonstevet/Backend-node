const { Model, DataTypes } = require("sequelize");
const { Cars } = require("./cars.model");
const { Customers } = require("./customers.model");

const RentsSchema = {
   id: {
      field: "ID",
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
   },
   fecha: {
      field: "FECHA",
      type: DataTypes.DATE(),
      allowNull: false,
   },
   tiempo: {
      field: "TIEMPO",
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   valorTotal: {
      field: "VALOR_TOTAL",
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   saldo: {
      field: "SALDO",
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   abonoInicial: {
      field: "ABONO_INICIAL",
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   devuelto: {
      field: "DEVUELTO",
      type: DataTypes.BOOLEAN,
      allowNull: false,
   },
   carId: {
      field: "CARRO_ID",
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
         model: Cars.tableName,
         key: "ID",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   },
   customerId: {
      field: "CLIENTE_ID",
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
         model: Customers.tableName,
         key: "ID",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   }
};

class Rents extends Model {
   static associate(models) {
      this.belongsTo(models.Cars, {as: 'carro', foreignKey: 'carId'});
      this.belongsTo(models.Customers, {as: 'cliente', foreignKey: 'customerId'});
      this.hasMany(models.Pays, {as: 'pagos', foreignKey: 'rentId'});
   }
   get tableName() {
      return "ALQUILERES";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: 'ALQUILERES',
         modelName: "Rents",
         timestamps: true,
      };
   }
}

module.exports = { RentsSchema, Rents };