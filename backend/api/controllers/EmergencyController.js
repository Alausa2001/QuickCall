const geocode = require('../utils/geocode'); 
const getNearbyPlaces = require('../utils/nearby_places');
const { mysqldb } = require('../../models/engine/mysql');
const { User, NotablePeople, EmergencyContacts, LGA, Feedbacks} = require('../../models/associations');



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
                    const location = `${lat},${lng}`;
                    const nearby_places = await getNearbyPlaces(emergencyType, location);

                    res.status(200).json({ status: "success", emergencyContacts, notablePeople, nearby_places });
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

    static async giveFeedback(req, res) {
        const username = res.locals.username;
        const { comment, emergencyType, emergencyContact } = req.body;

        if (!comment) {
            res.status(400).json({
                status: "bad request", message: "Failed, kindly give a comment on the service"
            });
            return;
        }

        try {
            const user = await mysqldb.get(User, { username });
            if (user) {
                const obj = {
                    comment, emergencyType, emergencyContact, userId: user.userId, username: user.username,
                };

                const feedback = await mysqldb.createModel(Feedbacks, obj);
                res.status(201).json({ status: 'success', message: "Feedback sent", feedback });
                return;
            }
            res.status(404).json({ status: 'failed', message: "unable to retrieve user"});
            return;
        } catch(err) {
            console.log(err);
            res.status(500).json({
                status: "internal server error", message: "error occurred while sending your feedback"
            });
            return;
        }
    }

    static async yourFeedbacks(req, res) {
        const username = res.locals.username;
        try {
           
            const feedbacks = await mysqldb.getAll(Feedbacks, { username });

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

module.exports = EmergencyController;