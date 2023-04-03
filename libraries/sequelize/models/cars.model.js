const { Model, DataTypes } = require("sequelize");

const CarsSchema = {
   id: {
      field: "ID",
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
   },
   placa: {
      field: "PLACA",
      type: DataTypes.STRING,
      allowNull: false,
   },
   marca: {
      field: "MARCA",
      type: DataTypes.STRING,
      allowNull: false,
   },
   modelo: {
      field: "MODELO",
      type: DataTypes.STRING,
      allowNull: false,
   },
   costo: {
      field: "COSTO",
      type: DataTypes.DECIMAL,
      allowNull: false,
   },
   disponible: {
      field: "DISPONIBLE",
      type: DataTypes.BOOLEAN,
      allowNull: false,
   }
};

class Cars extends Model {
   static associate(models) {
      this.hasMany(models.Rents, {as: 'rents', foreignKey: 'carId'});
   }
   get tableName() {
      return "CARROS";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: 'CARROS',
         modelName: "Cars",
         timestamps: true,
      };
   }
}

module.exports = { CarsSchema, Cars };