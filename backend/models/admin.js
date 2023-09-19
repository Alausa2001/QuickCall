const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./engine/mysql');

class Admin extends Model {}

Admin.init({
    AdminId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'admins', 
    modelName: 'Admin',
    timestamps: true,
});

module.exports = Admin;
