const { Model, DataTypes, Sequelize } = require('sequelize');

const UsersSchema = {
    uuid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true
    },
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resetPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    confirmationToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    confirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    blocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identification: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true
    },
    jobtitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedBy: {
        type: DataTypes.STRING,
        allowNull: true
    },

}

class UsersModel extends Model{
    static associate() {
        // define association here
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Users',
            timestamps: true
        }
    }
}

module.exports = { UsersSchema, UsersModel };