const geocode = require('../utils/geocode'); 
const { mysqldb } = require('../../models/engine/mysql');
const { NotablePeople, EmergencyContacts, LGA } = require('../../models/associations');



class EmergencyController {
    static async getContacts(req, res) {
        const { lat, lng, emergencyType } = req.params;

        if (!lat || !lng) {
            res.status(500).json({
                status: "bad request", message: "Latitude or longitude missing"
        });
        return;
        }

        try {
            const locationDetails = await geocode(lat, lng);
            const localGovt = locationDetails.LGA;
            if (localGovt) {
                const lga = await mysqldb.get(LGA, { LGAName: localGovt.toLowerCase() });

                if (lga) {
                    const emergencyContacts = await mysqldb.getAll(EmergencyContacts,
                        { LGAId: lga.LGAId, emergencyType: emergencyType.toLowerCase() });
                    const notablePeople = await mysqldb.getAll(NotablePeople, { LGAId: lga.LGAId });

                    res.status(200).json({ status: "success", emergencyContacts, notablePeople });
                    return;
                }
                res.status(404).json({ status: "not found", message: "LGA details not uploaded yet" });
                return;
            }
            res.status(501).json({
                status: "not implemented", message: "server unable to fulfill request"
            });
            return;
        } catch(err) {
            console.log(err);
            res.status(500).json({
                status: "internal server error", message: "error occurrd while retrieving contacts"
            });
            return;
        }
    }
}

module.exports = EmergencyController;