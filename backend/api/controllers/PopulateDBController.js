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
            for (let state of states) { 
                const stateDetails = await mysqldb.createModel(State, { stateName: state.toLowerCase() });
                delete stateDetails.createdAt;
                delete stateDetails.updatedAt;
                statesDetails.push(stateDetails);
            }
            res.status(201).json({ status: "success", message: "State added successfully", statesDetails });
            return;
        } catch(err) {
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
}


module.exports = PopulateDBController;