const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./engine/mysql');

class LGA extends Model {}

LGA.init({
    LGAId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    LGAName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'LGAs',
    modelName: 'LGA',
    timestamps: true,
});

module.exports = LGA;
