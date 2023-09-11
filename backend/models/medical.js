const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./engine/mysql')

class MedicalInfo extends Model {}

MedicalInfo.init({
    medicalId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    bloodType: {
        type: DataTypes.STRING(5), 
        allowNull: false,
    },
    genotype: {
        type: DataTypes.STRING(5), 
        allowNull: false,
    },
    allergies: {
        type: DataTypes.JSON, 
        allowNull: true,
    },
    chronicConditions: {
        type: DataTypes.JSON, 
        allowNull: true,
    },
    medEmerContact: {
        type: DataTypes.JSON, 
        allowNull: true,
    },
    famDocContact: {
        type: DataTypes.STRING(15), 
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'medical_info', 
    modelName: 'MedicalInfo',
    timestamps: true,
});


module.exports = MedicalInfo;
