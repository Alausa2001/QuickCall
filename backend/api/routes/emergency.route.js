const express = require('express');
const logger = require('../middlewares/logger');
const authorization = require('../middlewares/auth');
const EmergencyController = require('../controllers/EmergencyController');


const emerRouter = express.Router();
emerRouter.get('/:lat/:lng/:emergencyType', logger, authorization, EmergencyController.getContacts);

module.exports = emerRouter;