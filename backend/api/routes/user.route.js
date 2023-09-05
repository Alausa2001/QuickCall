const express = require('express');
const logger = require('../middlewares/logger');
const authorization = require('../middlewares/auth');
const UserController = require('../controllers/UserController');



const userRouter = express.Router();

userRouter.post('/medical_information/submit', logger, authorization, UserController.submitMedicalInfo);
userRouter.get('/medical_information', logger, authorization, UserController.getMedInfo);
userRouter.patch('/medical_information/update', logger, authorization, UserController.updateMedInfo);


module.exports = userRouter;