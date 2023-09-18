const express = require('express');
const logger = require('../middlewares/logger');
const authorization = require('../middlewares/auth');
const EmergencyController = require('../controllers/EmergencyController');
const UserController = require('../controllers/UserController');




const userRouter = express.Router();

userRouter.post('/create', logger, authorization, UserController.createProfile)
userRouter.post('/medical_information/submit', logger, authorization, UserController.submitMedicalInfo);
userRouter.get('/medical_information', logger, authorization, UserController.getMedInfo);
userRouter.patch('/medical_information/update', logger, authorization, UserController.updateMedInfo);

userRouter.get('/basic_information', logger, authorization, UserController.userInfo)
userRouter.patch('/basic_information/update', logger, authorization, UserController.updateProfile);



module.exports = userRouter;