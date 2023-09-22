const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./engine/mysql');


class NotablePeopleState extends Model {}

NotablePeopleState.init({
    notableId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    position: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    personName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phoneNo: {
        type: DataTypes.STRING(15), 
        allowNull: true,
    },
    whatsappContact: {
        type: DataTypes.STRING(15), 
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'notable_people_states',
    modelName: 'NotablePeopleState',
    timestamps: true,
});

module.exports = NotablePeopleState;