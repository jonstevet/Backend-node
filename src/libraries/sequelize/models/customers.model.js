import { Model, DataTypes } from 'sequelize';

export const CustomersSchema = {
    id: {
        field: 'ID',
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    cedula: {
        field: 'CEDULA',
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    nombre: {
        field: 'NOMBRE',
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono1: {
        field: 'TELEFONO1',
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    telefono2: {
        field: 'TELEFONO2',
        type: DataTypes.BIGINT,
        allowNull: false,
    },
};

export class Customers extends Model {

    constructor(...args) {
        super(...args);
        this._tableName = 'CLIENTES';
    }

    static associate(models) {
        this.hasMany(models.Rents, { as: 'rents', foreignKey: 'customerId' });
    }

    get tableName() {
        return this._tableName;
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: this._tableName,
            modelName: 'Customers',
            timestamps: true,
        };
    }
}