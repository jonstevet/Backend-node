import { Model, DataTypes } from 'sequelize';
import { Rents } from './rents.model.js';

export const PaysSchema = {
    id: {
        field: 'ID',
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    fecha: {
        field: 'FECHA',
        type: DataTypes.DATE,
        allowNull: false,
    },
    valor: {
        field: 'VALOR',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rentId: {
        field: 'ALQUILER_ID',
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Rents.tableName,
            key: 'ID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

export class Pays extends Model {
    constructor(...args) {
        super(...args);
        this._tableName = 'PAGOS';
    }

    static associate(models) {
        this.belongsTo(models.Rents, { foreignKey: 'rentId' });
    }

    get tableName() {
        return this._tableName;
    }
    
    static config(sequelize) {
        return {
            sequelize,
            tableName: this._tableName,
            modelName: 'Pays',
            timestamps: true,
        };
    }
}