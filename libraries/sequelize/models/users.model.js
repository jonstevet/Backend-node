const { Model, DataTypes, Sequelize } = require("sequelize");
const { UserRoles } = require("./userroles.model");

const UsersSchema = {
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
   firstname: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   lastname: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   image: {
      type: DataTypes.STRING,
      allowNull: true,
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   status: {
      type: DataTypes.STRING,
      allowNull: true,
   },
   resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true,
   },
   confirmationToken: {
      type: DataTypes.STRING,
      allowNull: true,
   },
   confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
   },
   blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
   },
   role: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
         model: UserRoles.tableName,
         key: "uuid",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
   },
   identification: {
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   company: {
      type: DataTypes.STRING,
      allowNull: true,
   },
   jobtitle: {
      type: DataTypes.STRING,
      allowNull: true,
   },
   birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
   }
};

class Users extends Model {
   static associate(models) {
      this.hasMany(models.Inventories, {as: 'inventories', foreignKey: 'user'});
      this.hasMany(models.Products, {as: 'productsCreated', foreignKey: 'createdBy'});
      this.hasMany(models.Products, {as: 'productsUpdated', foreignKey: 'updatedBy'});
      this.belongsTo(models.UserRoles, {foreignKey: 'role'});
   }
   get tableName() {
      return "Users";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: this.tableName,
         modelName: "Users",
         timestamps: true,
      };
   }
}

module.exports = { UsersSchema, Users };
