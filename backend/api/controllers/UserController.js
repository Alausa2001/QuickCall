const { mysqldb } = require('../../models/engine/mysql');
const { User, MedicalInfo} = require('../../models/associations');
const validate = require('../utils/validate_phoneno')


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

    static async getMedInfo(req, res) {
        const email = res.locals.email;

        try {
            const user = await mysqldb.get(User, { email }, ['userId'])
            const medInfo = await mysqldb.get(MedicalInfo, { userId: user.userId});
            res.status(201).json({ status: 'success', medicalInformaton: medInfo });
        } catch(err) {
            console.log(err);
            res.status(500).json({ status: 'internal server error', message: 'An error occurred while retreiving your information'});
            return;
        }
    }

    static async updateMedInfo(req, res) {
        const email = res.locals.email
        const obj = req.body;

        const keys = Object.keys(obj);

        /* delete undefined values in request body */ 
        for (let key of keys) {
            if (!(obj[key])) delete obj[key];
        }

        try {

            const user = await mysqldb.get(User, { email }, ['userId']);

            const arrAttributes = [ "chronicConditions", "allergies"]
            const medProfile = await mysqldb.get(MedicalInfo, { userId: user.userId }, arrAttributes);
            
            /* update medical information stored as array type */
            if (obj.allergies && medProfile.allergies) {
                for (let allergy of medProfile.allergies) {
                    if (!(obj.allergies.includes(allergy))) obj.allergies.push(allergy)
                }
            }
            if (obj.chronicConditions && medProfile.chronicConditions) {
                for (let condition of medProfile.chronicConditions) {
                    if (!(obj.chronicConditions.includes(condition))) obj.chronicConditions.push(condition)
                }
            }

            const updated = await mysqldb.update(MedicalInfo, { userId: user.userId }, obj);
            if (updated[0] > 0) {
              res.status(200).json({ status: "success", message: "medical information updated successfully"});
              return;
            }
            res.status(404).json({status: "not found", message: "user's medical profile not found"});
            return;
          } catch(err) {
            console.log(err);
            res.status(500).json({status: "internal server error", message: "error occurred while updatting profile"}); 
          }
    }
}

module.exports = UserController;