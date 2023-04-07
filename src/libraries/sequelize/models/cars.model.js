import { Model, DataTypes } from 'sequelize';

export const CarsSchema = {
    id: {
        field: 'ID',
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    placa: {
        field: 'PLACA',
        type: DataTypes.STRING,
        allowNull: false,
    },
    marca: {
        field: 'MARCA',
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        field: 'MODELO',
        type: DataTypes.STRING,
        allowNull: false,
    },
    costo: {
        field: 'COSTO',
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    disponible: {
        field: 'DISPONIBLE',
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
};

export class Cars extends Model {

    constructor(...args) {
        super(...args);
        this._tableName = 'CARROS';
    }

    static associate(models) {
        this.hasMany(models.Rents, { as: 'rents', foreignKey: 'carId' });
    }

    get tableName() {
        return this._tableName;
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: this._tableName,
            modelName: 'Cars',
            timestamps: true,
        };
    }
}