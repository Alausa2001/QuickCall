const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./engine/mysql')


class EmergencyTips extends Model {}

EmergencyTips.init({
    tipId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(200), 
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT, 
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'emergency_tips',
    modelName: 'EmergencyTips',
    timestamps: true,
});

module.exports = EmergencyTips;
