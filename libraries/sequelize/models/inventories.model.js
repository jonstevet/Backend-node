const { Model, DataTypes, Sequelize } = require("sequelize");
const { Products } = require("./products.model");
const { Users } = require("./users.model");

const InventoriesSchema = {
   uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
   },
   id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
   },
   quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   typeMovement: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   reference: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   description: {
      type: DataTypes.STRING,
      allowNull: true,
   },
   product: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
         model: Products.tableName,
         key: "uuid",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   },
   user: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
         model: Users.tableName,
         key: "uuid",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   }
};

class Inventories extends Model {
   static associate(models) {
      this.belongsTo(models.Products, {foreignKey: 'product'});
      this.belongsTo(models.Users, {foreignKey: 'user'});
   }
   get tableName() {
      return "Inventories";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: this.tableName,
         modelName: "Inventories",
         timestamps: true,
      };
   }
}

module.exports = { InventoriesSchema, Inventories };
