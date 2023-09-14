/* only admins can use these routes */

const express = require('express');
const logger = require('../middlewares/logger');
const PopulateDBController = require('../../api/controllers/PopulateDBController')

const populateDB = express.Router();

populateDB.post('/add_states', logger, PopulateDBController.addStates);
populateDB.get('/get_states', logger, PopulateDBController.getStates);

populateDB.post('/add_local_governments', logger, PopulateDBController.addLGA);
populateDB.get('/:stateId/get_local_governments', logger, PopulateDBController.getLGAs);
populateDB.delete('/local_government/:LGAId/delete', logger, PopulateDBController.deleteLGA);

populateDB.post('/add_emergency_contacts/:LGAId', logger, PopulateDBController.addEmergencyContacts);
populateDB.get('/emergency_contacts/:LGAId', logger, PopulateDBController.getContacts);
populateDB.delete('/emergency_contact/:contactId/delete', logger, PopulateDBController.deleteEmergencyContact)

populateDB.post('/add_notable_personality/:LGAId', logger, PopulateDBController.addNotablePersonality);
populateDB.get('/notable_people/:LGAId', logger, PopulateDBController.getNotablePersonalities);
populateDB.delete('/notable_people/:notableId/delete', logger, PopulateDBController.deleteNotablePersonality)

module.exports = populateDB;