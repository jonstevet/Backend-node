const { Model, DataTypes, Sequelize } = require("sequelize");

const CategoriesSchema = {
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
      unique: true,
   },
   image: {
      type: DataTypes.STRING,
      allowNull: true,
   },
};

class Categories extends Model {
   static associate(models) {
      this.hasMany(models.SubCategories, {as: 'subcategories', foreignKey: 'category'});
   }
   get tableName() {
      return "Categories";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: this.tableName,
         modelName: "Categories",
         timestamps: true,
      };
   }
}

module.exports = { CategoriesSchema, Categories };
