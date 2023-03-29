const { Model, DataTypes, Sequelize } = require('sequelize');

const InventoriesSchema = {
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
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    typeMovement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product: {
        type: DataTypes.UUID,
        allowNull: false
    },
    user: {
        type: DataTypes.UUID,
        allowNull: false
    }
};

class InventoriesModel extends Model{
    static associate() {
        // define association here
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Inventories',
            timestamps: true
        }
    }
};

module.exports = { InventoriesSchema, InventoriesModel };