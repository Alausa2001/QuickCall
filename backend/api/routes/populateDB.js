/* only admins can use these routes */

const express = require('express');
const logger = require('../middlewares/logger');
const PopulateDBController = require('../../api/controllers/PopulateDBController')

const populateDB = express.Router();

populateDB.post('/add_states', logger, PopulateDBController.addStates);
populateDB.get('/get_states', logger, PopulateDBController.getStates);

populateDB.post('/add_local_governments', logger, PopulateDBController.addLGA);
populateDB.get('/get_local_governments/:stateId', logger, PopulateDBController.getLGAs);
populateDB.delete('/local_government/:LGAId/delete', logger, PopulateDBController.deleteLGA);

module.exports = populateDB;