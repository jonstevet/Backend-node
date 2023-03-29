const { Model, DataTypes, Sequelize } = require('sequelize');

const SubCategoriesSchema = {
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
    }
};

class SubCategoriesModel extends Model{
    static associate() {
        // define association here
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'SubCategories',
            timestamps: true
        }
    }
};

module.exports = { SubCategoriesSchema, SubCategoriesModel };