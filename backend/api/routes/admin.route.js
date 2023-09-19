/* only admins can use these routes */

const express = require('express');
const logger = require('../middlewares/logger');
const AdminController = require('../controllers/AdminController')

const adminRouter = express.Router();

adminRouter.post('/add_states', logger, AdminController.addStates);
adminRouter.get('/get_states', logger, AdminController.getStates);

adminRouter.post('/add_local_governments', logger, AdminController.addLGA);
adminRouter.get('/:stateId/get_local_governments', logger, AdminController.getLGAs);
adminRouter.delete('/local_government/:LGAId/delete', logger, AdminController.deleteLGA);

adminRouter.post('/add_emergency_contacts/:LGAId', logger, AdminController.addEmergencyContacts);
adminRouter.get('/emergency_contacts/:LGAId', logger, AdminController.getContacts);
adminRouter.delete('/emergency_contact/:contactId/delete', logger, AdminController.deleteEmergencyContact)

adminRouter.post('/add_notable_personality/:LGAId', logger, AdminController.addNotablePersonality);
adminRouter.get('/notable_people/:LGAId', logger, AdminController.getNotablePersonalities);
adminRouter.delete('/notable_people/:notableId/delete', logger, AdminController.deleteNotablePersonality)

adminRouter.get('/feedbacks/:startDate/:endDate', logger, AdminController.getUsersFeedbacks);

module.exports = adminRouter;