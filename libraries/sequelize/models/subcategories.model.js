const { Model, DataTypes, Sequelize } = require("sequelize");
const { Categories } = require("./categories.model");

const SubCategoriesSchema = {
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
   image: {
      type: DataTypes.STRING,
      allowNull: true,
   },
   category: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
         model: Categories.tableName,
         key: "uuid",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   },
};

class SubCategories extends Model {
   static associate(models) {
      this.belongsTo(models.Categories, {foreignKey: 'category'});
      this.hasMany(models.Products, {as: 'products', foreignKey: 'subCategory'});
   }
   get tableName() {
      return "SubCategories";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: this.tableName,
         modelName: "SubCategories",
         timestamps: true,
      };
   }
}

module.exports = { SubCategoriesSchema, SubCategories };
