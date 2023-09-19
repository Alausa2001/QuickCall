const express = require('express');
const logger = require('../middlewares/logger');
const authorization = require('../middlewares/auth');
const EmergencyController = require('../controllers/EmergencyController');


const emerRouter = express.Router();
emerRouter.get('/:lat/:lng/:emergencyType', logger, EmergencyController.getContacts);
emerRouter.post('/feedback', logger, authorization, EmergencyController.giveFeedback);
emerRouter.get('/my_feedbacks', logger, authorization, EmergencyController.yourFeedbacks);

module.exports = emerRouter;