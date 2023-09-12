/* only admins can use these routes */

const express = require('express');
const logger = require('../middlewares/logger');
const PopulateDBController = require('../../api/controllers/PopulateDBController')

const populateDB = express.Router();

populateDB.post('/add_states', logger, PopulateDBController.addStates);
populateDB.get('/get_states', logger, PopulateDBController.getStates);

module.exports = populateDB;