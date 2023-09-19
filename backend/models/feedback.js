const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./engine/mysql')

class Feedbacks extends Model {}

Feedbacks.init({
    feedbackId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    emergencyType: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT, 
        allowNull: true,
    },
    emergencyContact: {
        type: DataTypes.STRING(15), 
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'feedbacks',
    modelName: 'Feedbacks',
    timestamps: true,
});

module.exports = Feedbacks;