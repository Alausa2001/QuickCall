const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./engine/mysql')


class EmergencyContacts extends Model {}

EmergencyContacts.init({
    contactId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    emergencyType: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    phoneNo: {
        type: DataTypes.STRING(15), // Adjust the length as needed
        allowNull: true,
    },
    whatsappContact: {
        type: DataTypes.STRING(15), // Adjust the length as needed
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'emergency_contacts',
    modelName: 'EmergencyContacts',
    timestamps: true,
});

module.exports = EmergencyContacts;