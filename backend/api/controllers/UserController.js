const { mysqldb } = require('../../models/engine/mysql');
const { User, MedicalInfo} = require('../../models/associations');


class UserController {
    static async submitMedicalInfo(req, res) {
        const email = res.locals.email;
        const {
            bloodType, genotype, allergies,
            chronicConditions, medEmerContact, famDocContact,
        } = req.body
       
        if (!bloodType) {
            res.status(400).json({ status: 'bad request', message: 'blood type missing' })
            return
        }

        if (!genotype) {
            res.status(400).json({ status: 'bad request', message: 'genotype missing' })
            return
        }
        try {
            const user = await mysqldb.get(User, { email }, ["userId"]);
            const obj = {
                userId: user.userId, bloodType, genotype, allergies,
                chronicConditions, medEmerContact, famDocContact,
            };
            const medProfile = await mysqldb.createModel(MedicalInfo, obj);
            res.status(201).json({ status: 'success', message: "medical profile created", medInfo: medProfile });
            return;
        } catch(err) {
            console.log(err);
            res.status(500).json({ status: 'internal server error', message: 'An error occurred while creating medical profile'});
            return;
        }
    }
}

module.exports = UserController;