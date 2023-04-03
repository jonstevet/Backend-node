const { Model, DataTypes } = require("sequelize");
const { Rents } = require("./rents.model");

const PaysSchema = {
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
      type: DataTypes.DATE,
      allowNull: false,
   },
   valor: {
      field: "VALOR",
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   rentId: {
      field: "ALQUILER_ID",
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
         model: Rents.tableName,
         key: "ID",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   }
};

class Pays extends Model {
   static associate(models) {
      this.belongsTo(models.Rents, {foreignKey: 'rentId'});
   }
   get tableName() {
      return "PAGOS";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: 'PAGOS',
         modelName: "Pays",
         timestamps: true,
      };
   }
}

module.exports = { PaysSchema, Pays };