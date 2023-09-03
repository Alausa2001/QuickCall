const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./engine/mysql');

class User extends Model {}

User.init({
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING(36),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(36),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(36),
        allowNull: false,
    },
    phoneNo1: {
        type: DataTypes.STRING(15), 
        allowNull: false,
    },
    phoneNo2: {
        type: DataTypes.STRING(15), 
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'users', 
    modelName: 'User',
    timestamps: true,
});

module.exports = User;
