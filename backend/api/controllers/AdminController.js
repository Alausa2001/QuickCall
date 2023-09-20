const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { mysqldb } = require('../../models/engine/mysql');
const {
    Admin, State, LGA, NotablePeople, EmergencyContacts, Feedbacks
} = require('../../models/associations');


class AdminController {

    static async signup(req, res) {
        let { password, username } = req.body;
        if (!password) {
            res.status(400).json({ status: 'bad request', message: 'password missing' });
            return;
        }

        if (!username) {
            res.status(400).json({ status: 'bad request', message: 'username missing' });
            return;
        }

        const filter = { username };

        const user = await mysqldb.get(Admin, filter);
        if (user) {
            res.status(400).json({ status: 'failed', message: 'user exists, use another username' });
            return;
        }
        try {
            const salt = await bcrypt.genSalt(10)
            password = await bcrypt.hash(password, salt)

            const obj = { password, username };
            const newUser = await mysqldb.createModel(Admin, obj);
            delete newUser.password;
            res.status(201).json({ status: 'success', newUser });
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: `internal server error` });
        }
    }

    static async signin(req, res) {
        const { password, username } = req.body;

        if (!password) {
            res.status(400).json({ status: 'bad request', message: 'password missing' });
            return;
        }
        if (!username) {
            res.status(400).json({ status: 'bad request', message: 'username missing' });
            return;
        }

        const filter = { username };
        let admin;
        try {
            admin = await mysqldb.get(Admin, filter);
            if (!admin) {
                res.status(400).json({ status: 'bad request', message: 'admin account not found' });
                return;
            }
            const validPassword = await bcrypt.compare(password, admin.password);
            if (!validPassword) {
                res.status(400).json({ status: 'bad request', message: 'invalid password' });
                return;
            }
            delete admin.password;
        } catch(err) {
            console.log(err);
            res.status(500).json({ error: "internal server error" });
            return;
        }
        // generates jwt
        const token = jwt.sign({ username: admin.username }, process.env.ADMIN_SECRET_KEY, { expiresIn: '15h' });
        res.setHeader('Access-Control-Expose-Headers', 'Authorization');
        res.status(200).header('Authorization', `Bearer ${token}`).json({ status: 'success', admin});
        return
    }


    static async addStates(req, res) {
        const { states } = req.body;

        if (!states) {
            res.status(400).json({ status: "bad request", message: "states not specified"});
            return;
        }

        let statesDetails = [];
        try {
            let statesPresent = await State.findAll({ raw: true, attributes: ["stateName"]});
            statesPresent = statesPresent.map((state) => state.stateName);
            
            for (let state of states) { 
                if (statesPresent.includes(state.toLowerCase())) {
                    continue;
                }
                const stateDetails = await mysqldb.createModel(State, { stateName: state.toLowerCase() });
                delete stateDetails.createdAt;
                delete stateDetails.updatedAt;
                statesDetails.push(stateDetails);
            }
            res.status(201).json({ status: "success", message: "States added successfully", statesDetails });
            return;
        } catch(err) {
            console.log(err)
            res.status(500).json({
                status: "Internal server error", message: "Error occurred while adding the state"
            });
            return;
        }
    }

    static async getStates(req, res) {
        try {
            const states = await State.findAll();
            if (states) {
                res.status(200).json({ status: "success", states });
                return;
            }
            res.status(404).json({ status: "not found", message: "No states found"});
            return;
        } catch(err) {
            res.status(500).json({
                status: "Internal server error", message: "Error occurred while retrieving the states details"
            });
            return;
        }
    }

    static async addLGA(req, res) {
        const { LGAs, stateId } = req.body;

        if (!stateId) {
            res.status(400).json({
                status: "bad request", message: "state to which the local governments belong not specified"
            });
            return;
        }

        if (!LGAs) {
            res.status(400).json({
                status: 'bad request', message: 'list of local govenrments not defined'
            });
            return;
        }

        try {
            let stateExist = await mysqldb.get(State, { stateId });
            if (!stateExist) {
                res.status(400).json({ status: "bad request", message: "Invalid state id" });
                return;
            }
            
            // LGA === local government area
            const LGAsDetails = [];
            let LGAsPresent = await LGA.findAll({ raw: true, attributes: ["LGAName"]});
            LGAsPresent = LGAsPresent.map((LGA) => LGA.LGAName);

            for (let lga of LGAs) {
                if (LGAsPresent.includes(lga.toLowerCase())) {
                    continue;
                }
                
                const LGADetails = await mysqldb.createModel(LGA, { LGAName: lga.toLowerCase(), stateId });

                delete LGADetails.createdAt;
                delete LGADetails.updatedAt;
                LGAsDetails.push(LGADetails);
            }
            res.status(201).json({
                status: "success", message: "local government areas added successfully", LGAsDetails
            });
            return;
        } catch(err) {
            console.log(err)
            res.status(500).json({
                status: "Internal server error", message: "Error occurred while adding the local governments"
            });
            return;
        }
    }

    static async getLGAs(req, res) {

        const stateId = req.params.stateId;
        try {
            const LGAs = await LGA.findAll({ where: { stateId }});
            if (LGAs) {
                res.status(200).json({ status: "success", LGAs });
                return;
            }
            res.status(404).json({ status: "not found", message: "No local governments found"});
            return;
        } catch(err) {
            res.status(500).json({
                status: "Internal server error",
                message: "Error occurred while retrieving the local governments areas details"
            });
            return;
        }
    }

    static async deleteLGA(req, res) {
        const { LGAId } = req.params;
        try {
            const LGAExist = await mysqldb.get(LGA, { LGAId });
            if (!LGAExist) {
                res.status(404).json({ status: "not found", message: 'Local goverment not found' });
                return;
            }

            const state = await mysqldb.get(State, { stateId: LGAExist.stateId }, ["stateName"])
            const deleted = await LGA.destroy({ where: { LGAId }});
            res.status(200).json({
                status: "success", message: `Deleted ${LGAExist.LGAName} local government in ${state.stateName}`
            });
        } catch(err) {
            console.log(err);
            res.status(500).json({
                status: 'internal server error', message: "error occurred while deleting local governments"
        });
        return;
        }
    }

    static async addEmergencyContacts(req, res) {

        const { emergencyType, emergencyNo, whatsappContact } = req.body;
        const LGAId = req.params.LGAId;

        if (!emergencyType) {
            res.status(400).json({
                status: 'bad request',
                message: 'Type of emergency contact not specified (fire, medical or police)'
            });
            return;
        }

        if (!emergencyNo) {
            res.status(400).json({
                status: 'bad request',
                message: 'Emergency number not defined'
            });
            return;
        }

        try {
            const obj = {
                LGAId, emergencyNo, emergencyType: emergencyType.toLowerCase(), whatsappContact
            };
            const contact = await mysqldb.createModel(EmergencyContacts, obj);
            res.status(201).json({
                status: 'success', message: 'emergency contact details added successfully', contact
            });
            return;
        } catch(err) {
            console.log(err);
            res.status(500).json({
                status: 'internal server error',
                message: 'error occurred while adding emergency contact details'
            });
            return;
        }
    }

    static async getContacts(req, res) {
        /* returns all emergency contacts in a local government */
        const LGAId = req.params.LGAId;

        try {
            const contacts = await mysqldb.getAll(EmergencyContacts, { LGAId });
            if (!contacts) {
                res.status(404).json({ status: "not found", message: 'No contacts found' });
            }
            res.status(200).json({ status: "success", contacts });
            return;
        } catch(err) {
            res.status(500).json({
                status: 'internal server error',
                message: 'error occurred while retrieving emergency contact details'
            });
            return
        }
    }

    static async deleteEmergencyContact(req, res) {
        const { contactId } = req.params;
        
        try {
            const deleted = await EmergencyContacts.destroy({ where: { contactId }});
            console.log(deleted)
            if (deleted > 0) {
                res.status(200).json({ status: "success", message: "contact deleted!" });
                return;
            }
            res.status(404).json({
                status: 'not found', message: 'contact not found'
            });
            return;

        } catch(err) {
            console.log(err);
            res.status(500).json({
                status: 'internal server error', message: "error occurred while deleting local governments"
        });
        return;
        }
    }


    static async addNotablePersonality(req, res) {
        const { position, personName, phoneNo, whatsappContact } = req.body;
        const LGAId = req.params.LGAId;

        if (!personName) {
            res.status(400).json({ status: "bad request", message: "Person's name not defined" });
            return;
        }

        if (!position) {
            res.status(400).json({
                status: 'bad  request', message: 'Position held by person not defined'});
            return;
        }

        if (!phoneNo) {
            res.status(400).json({ status: "bad request", message: "Person's contact not defined" });
            return;
        }

        try {
            const obj = {
                position, personName, phoneNo, whatsappContact, LGAId,
            };

            const contact = await mysqldb.createModel(NotablePeople, obj);
            res.status(201).json({
                status: 'success', message: `${personName}'s details added successfully`
            });
            return;
        } catch(err) {
            console.log(err);
            res.status(500).json({
                status: 'internal server error',
                message: `error occurred while adding ${personName}'s  details`
            });
            return;
        }
    }

    static async getNotablePersonalities(req, res) {
        /* returns all notable personalities in a local government */
        const LGAId = req.params.LGAId;

        try {
            const notablePeople = await mysqldb.getAll(NotablePeople, { LGAId });
            if (!notablePeople) {
                res.status(404).json({ status: "not found", message: 'No personalities found' });
            }
            res.status(200).json({ status: "success", notablePeople });
            return;
        } catch(err) {
            res.status(500).json({
                status: 'internal server error',
                message: 'error occurred while retrieving notable personalities details'
            });
            return
        }
    }

    static async deleteNotablePersonality(req, res) {
        const { notableId } = req.params;
        
        try {
            const deleted = await NotablePeople.destroy({ where: { notableId }});
            if (deleted > 0) {
                res.status(200).json({ status: "success", message: "deleted!" });
                return;
            }
            res.status(404).json({
                status: 'not found', message: 'person not found'
            });
            return;

        } catch(err) {
            console.log(err);
            res.status(500).json({
                status: 'internal server error', message: "error occurred while deleting personality"
        });
        return;
        }
    }

    static async getUsersFeedbacks(req, res) {
        let { startDate, endDate } = req.params;
        startDate = startDate.split('-');
        endDate = endDate.split('-');
        
        try {
            startDate = new Date(parseInt(startDate[0]), parseInt(startDate[1]) - 1, parseInt(startDate[2]));
            endDate = new Date(parseInt(endDate[0]), parseInt(endDate[1]) - 1, parseInt(endDate[2]));

            const feedbacks = await Feedbacks.findAll({
                where: {createdAt: { [Op.between]: [startDate, endDate]}}
            });

            if (feedbacks) {
                res.status(200).json({ status: 'success', feedbacks });
                return;
            }

            res.status(404).json({ status: 'not found', message: 'No feedbacks yet'});
            return;

        } catch(err) {
            console.log(err);
            res.status(500).json({
                status: 'internal server error', message: "error occurred while retrieving feedbacks"
            });
            return;
        }
    }
}


module.exports = AdminController;