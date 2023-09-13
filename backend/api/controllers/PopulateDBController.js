const { State, LGA, NotablePeople, EmergencyContacts } = require('../../models/associations');
const { mysqldb } = require('../../models/engine/mysql');

class PopulateDBController {

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
}


module.exports = PopulateDBController;