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
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING(36),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
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
        allowNull: true,
    },
    phoneNo2: {
        type: DataTypes.STRING(15), 
        allowNull: true,
    },
    age: {
        type: DataTypes.STRING(5), 
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING(5), 
        allowNull: true,
    },
    nameOfEmerContact: {
        type: DataTypes.STRING(255), 
        allowNull: true,
    },
    relationship: {
        type: DataTypes.STRING(255), 
        allowNull: true,
    },
    emerContactPhoneNo: {
        type: DataTypes.STRING(15), 
        allowNull: true,
    }
}, {
    sequelize,
    tableName: 'users', 
    modelName: 'User',
    timestamps: true,
});

module.exports = User;
