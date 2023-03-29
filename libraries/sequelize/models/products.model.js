const { Model, DataTypes, Sequelize } = require('sequelize');

const ProductsSchema = {
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
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    category: {
        type: DataTypes.UUID,
        allowNull: false
    },
    subCategory: {
        type: DataTypes.UUID,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.UUID,
        allowNull: true
    }
};

class ProductsModel extends Model{
    static associate() {
        // define association here
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Products',
            timestamps: true
        }
    }
};

module.exports = { ProductsSchema, ProductsModel };