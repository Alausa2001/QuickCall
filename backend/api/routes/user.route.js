const express = require('express');
const logger = require('../middlewares/logger');
const authorization = require('../middlewares/auth');
const UserController = require('../controllers/UserController');


const userRouter = express.Router();

userRouter.post('/medical_information', logger, authorization, UserController.submitMedicalInfo);


module.exports = userRouter;