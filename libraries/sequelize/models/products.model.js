const { Model, DataTypes, Sequelize } = require("sequelize");
const { SubCategories } = require("./subcategories.model");
const { Users } = require("./users.model");

const ProductsSchema = {
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
   name: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   description: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   reference: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   image: {
      type: DataTypes.STRING,
      allowNull: true,
   },
   price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
   },
   subCategory: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
         model: SubCategories.tableName,
         key: "uuid",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   },
   createdBy: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
         model: Users.tableName,
         key: "uuid",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   },
   updatedBy: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
         model: Users.tableName,
         key: "uuid",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   },
};

class Products extends Model {
   static associate(models) {
      this.belongsTo(models.SubCategories, {foreignKey: 'subCategory'});
      this.hasMany(models.Inventories, {as: 'inventories', foreignKey: 'product'});
      this.belongsTo(models.Users, {foreignKey: 'createdBy'});
      this.belongsTo(models.Users, {foreignKey: 'updatedBy'});
      this.hasMany(models.ProductsTags, {as: 'tags', foreignKey: 'product'});
   }
   get tableName() {
      return "Products";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: this.tableName,
         modelName: "Products",
         timestamps: true,
      };
   }
}

module.exports = { ProductsSchema, Products };