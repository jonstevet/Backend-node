const { Model, DataTypes, Sequelize } = require("sequelize");

const UserRolesSchema = {
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
   }
};

class UserRoles extends Model {
   static associate(models) {
      this.hasMany(models.Users, {as: 'user', foreignKey: 'role'});
   }
   get tableName() {
      return "UserRoles";
   }
   static config(sequelize) {
      return {
         sequelize,
         tableName: this.tableName,
         modelName: "UserRoles",
         timestamps: true,
      };
   }
}

module.exports = { UserRolesSchema, UserRoles };