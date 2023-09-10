const express = require('express');
const logger = require('../middlewares/logger');
const AuthController = require('../controllers/AuthController');

const authRouter = express.Router();

authRouter.post('/signup', logger, AuthController.signup);
authRouter.post('/signin', logger, AuthController.signin);

module.exports = authRouter;