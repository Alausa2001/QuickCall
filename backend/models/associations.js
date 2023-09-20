const State = require('./state');
const Admin = require('./admin');
const User = require('./user');
const LGA = require('./local_government');
const Feedbacks = require('./feedback');
const EmergencyContacts = require('./emergency_contacts');
const NotablePeople = require('./notable_people');
const MedicalInfo = require('./medical');
const EmergencyTips = require('./emergency_tips');

MedicalInfo.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }
});

Feedbacks.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }
});

LGA.belongsTo(State, {
    foreignKey: {
        name: 'stateId',
        allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }
});

NotablePeople.belongsTo(LGA, {
    foreignKey: {
        name: 'LGAId',
        allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }
});

EmergencyContacts.belongsTo(LGA, {
    foreignKey: {
        name: 'LGAId',
        allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }
});



User.sync();
State.sync();
LGA.sync();
NotablePeople.sync();
EmergencyContacts.sync();
MedicalInfo.sync();
Feedbacks.sync();
Admin.sync();
EmergencyTips.sync();


module.exports = {
    Admin, User, State, LGA, NotablePeople,
    EmergencyContacts, MedicalInfo, Feedbacks, EmergencyTips
};