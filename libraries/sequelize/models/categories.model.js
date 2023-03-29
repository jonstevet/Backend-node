const { Model, DataTypes, Sequelize } = require('sequelize');

const CategoriesSchema = {
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
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    subCategory: {
        type: DataTypes.UUID,
        allowNull: false
    }
};

class CategoriesModel extends Model{
    static associate() {
        // define association here
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Categories',
            timestamps: true
        }
    }
};

module.exports = { CategoriesSchema, CategoriesModel };