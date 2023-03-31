const { Model, DataTypes, Sequelize } = require("sequelize");
const { Products } = require("./products.model");

const ProductsTagsSchema = {
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
   product: {
      allowNull: true,
      type: DataTypes.UUID,
      references: {
         model: Products.tableName,
         key: "uuid",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   },
   key: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   value: {
      type: DataTypes.STRING,
      allowNull: true,
   }
};

class ProductsTags extends Model {
   static associate(models) {
      this.belongsTo(models.Products, {foreignKey: 'product'});
   }
   get tableName() {
      return "ProductsTags";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: this.tableName,
         modelName: "ProductsTags",
         timestamps: true,
      };
   }
}

module.exports = { ProductsTagsSchema, ProductsTags };
