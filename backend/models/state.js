const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./engine/mysql');

class State extends Model {}

State.init({
    stateId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    stateName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'states',
    modelName: 'State',
    timestamps: true,
});

module.exports = State;
