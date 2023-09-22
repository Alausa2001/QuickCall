/* only admins can use these routes */

const express = require('express');
const logger = require('../middlewares/logger');
const adminAuthorization = require('../middlewares/admin.auth');
const AdminController = require('../controllers/AdminController');

const adminRouter = express.Router();


adminRouter.post('/signin', logger, AdminController.signin);
adminRouter.post('/signup', logger, AdminController.signup);

adminRouter.post('/add_states', logger, adminAuthorization, AdminController.addStates);
adminRouter.get('/get_states', logger, adminAuthorization, AdminController.getStates);

adminRouter.post('/add_local_governments', logger, adminAuthorization, AdminController.addLGA);
adminRouter.get('/:stateId/get_local_governments', logger, adminAuthorization, AdminController.getLGAs);
adminRouter.delete('/local_government/:LGAId/delete', logger, adminAuthorization, AdminController.deleteLGA);

adminRouter.post('/add_emergency_contacts/:LGAId', logger, adminAuthorization, AdminController.addEmergencyContacts);
adminRouter.get('/emergency_contacts/:LGAId', logger, adminAuthorization, AdminController.getContacts);
adminRouter.delete('/emergency_contact/:contactId/delete', logger, adminAuthorization, AdminController.deleteEmergencyContact)

adminRouter.post('/add_notable_personality/:LGAId', logger, adminAuthorization, AdminController.addNotablePersonality);
adminRouter.get('/notable_people/:LGAId', logger, adminAuthorization, AdminController.getNotablePersonalities);
adminRouter.delete('/notable_people/:notableId/delete', logger, adminAuthorization, AdminController.deleteNotablePersonality);

adminRouter.get('/feedbacks/:startDate/:endDate', logger, adminAuthorization, AdminController.getUsersFeedbacks);

adminRouter.post('/add_emergency_tips', logger, adminAuthorization, AdminController.addEmergencyTips);
adminRouter.get('/emergency_tips', logger, adminAuthorization, AdminController.getEmergencyTips);
adminRouter.delete('/emergency_tip/:tipId/delete', logger, adminAuthorization, AdminController.deleteEmergencyTip)

adminRouter.post('/add_notable_personality/state/:stateId', logger, adminAuthorization, AdminController.addNotablePersonalityState);
adminRouter.get('/notable_people/state/:stateId', logger, adminAuthorization, AdminController.getNotablePersonalitiesState);
adminRouter.delete('/notable_people/state/:notableId/delete', logger, adminAuthorization, AdminController.deleteNotablePersonalityState);

module.exports = adminRouter;