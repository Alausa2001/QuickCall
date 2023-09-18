const bcrypt = require('bcrypt');
const { mysqldb } = require('../../models/engine/mysql');
const validatePhoneNo = require('../utils/validate_phoneno');
const { User, MedicalInfo} = require('../../models/associations');



class UserController {
    static async createProfile(req, res) {
        const username = res.locals.username;
        let {
            firstName, lastName, email, phoneNo1, phoneNo2, age, gender,
            nameOfEmerContact,  emergencyPhoneNo, relationship,
        } = req.body;
        // console.log(req.body);
        if (!firstName) {
            res.status(400).json({ status: 'bad request', message: 'firstname missing' });
            return;
        }
        if (!lastName) {
            res.status(400).json({ status: 'bad request', message: 'lastname missing' });
            return;
        }
          
        if (!email) {
            res.status(400).json({ status: 'bad request', message: 'email missing' });
            return;
        }
        if (!phoneNo1) {
            res.status(400).json({ status: 'bad request', message: 'main phone number missing' });
            return;
        }

        if (!gender) {
            res.status(400).json({ status: 'bad request', message: 'gender not specified' });
            return;
        }
      
        /*
        let data = await validatePhoneNo(phoneNo1)
        if (data === null || (!data.carrier))  {
            res.status(400).json({ status: 'bad request', message: 'phone number 1 invalid' });
            return
        }
      
          
        if (phoneNo2) {
            data = await validatePhoneNo(phoneNo2)
            if (data === null || (!data.carrier))  {
                res.status(400).json({ status: 'bad request', message: 'phone number 2 invalid' });
                return
            } 
        }
        */

        try {
            const obj = {
                firstName, lastName, email, phoneNo1, phoneNo2, age, gender,
                nameOfEmerContact,  emergencyPhoneNo, relationship,
            };
            const user = await mysqldb.update(User, { username },  obj);
              delete user.password;
              res.status(201).json({ status: 'success', message: "profile created successfully" });
          } catch (err) {
              console.log(err)
              res.status(500).json({ error: `internal server error` });
          }
    }

    static async submitMedicalInfo(req, res) {
        const username = res.locals.username;
        const {
            bloodType, genotype, allergies,
            chronicConditions, famDocContact,
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
            const user = await mysqldb.get(User, { username }, ["userId"]);
            const obj = {
                userId: user.userId, bloodType, genotype, allergies,
                chronicConditions,  famDocContact,
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
        const username = res.locals.username;

        try {
            const user = await mysqldb.get(User, { username }, ['userId'])
            const medInfo = await mysqldb.get(MedicalInfo, { userId: user.userId});
            res.status(201).json({ status: 'success', medicalInformaton: medInfo });
        } catch(err) {
            console.log(err);
            res.status(500).json({ status: 'internal server error', message: 'An error occurred while retreiving your information'});
            return;
        }
    }

    static async updateMedInfo(req, res) {
        const username = res.locals.username;
        const obj = req.body;

        const keys = Object.keys(obj);

        /* delete undefined values in request body */ 
        for (let key of keys) {
            if (!(obj[key])) delete obj[key];
        }

        try {

            const user = await mysqldb.get(User, { username }, ['userId']);

            const arrAttributes = [ "chronicConditions", "allergies"]
            const medProfile = await mysqldb.get(MedicalInfo, { userId: user.userId }, arrAttributes);
            
            /* update medical information stored as array type */
            if (medProfile === null) {
                obj.userId = user.userId;
                const newMedProfile = await mysqldb.createModel(MedicalInfo, obj);
                res.status(200).json({
                    status: "success", message: "medical information updated successfully",
                    newMedProfile
                });
            }
            
            if (obj.allergies && medProfile.allergies !== null) {
                for (let allergy of medProfile.allergies) {
                    if (!(obj.allergies.includes(allergy))) obj.allergies.push(allergy)
                }
            }
            if (obj.chronicConditions && medProfile.chronicConditions) {
                for (let condition of medProfile.chronicConditions) {
                    if (!(obj.chronicConditions.includes(condition))) obj.chronicConditions.push(condition)
                }
            }

            if (obj.medEmerContact && medProfile.medEmerContact) {
                for (let contact of medProfile.medEmerContact) {
                    if (!(obj.medEmerContact.includes(contact))) obj.allergies.push(contact)
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

    static async userInfo(req, res) {
        const username = res.locals.username;

        try {
            const user = await mysqldb.get(User, { username });
            delete user.password;
            res.status(200).json({ status: 'success', userInformation: user });
        } catch(err) {
            console.log(err);
            res.status(500).json({
                status: 'internal server error', message: 'An error occurred while retreiving your information'
            });
            return;
        }   
    }

    static async updateProfile(req, res) {
        const username = res.locals.username;
        const obj = req.body;
        
        if (obj.password) {
            const salt = await bcrypt.genSalt(10)
            obj.password = await bcrypt.hash(obj.password, salt)
        }
        
        const keys = Object.keys(obj);
        for (let key of keys) {
            if (!(obj[key])) delete obj[key];
        }
        try {
            const updated = await mysqldb.update(User, { username }, obj)
            if (updated[0] > 0) {
                res.status(200).json({ status: "success", message: "profile updated successfully" });
                return;
            }
            res.status(404).json({status: "Not found", message: "profile not updated"});
            return;
        } catch(err) {
            console.error(err);
            res.status(500).json({
                status: "Internal server error", message: "error occurred while updating profile"
            }); 
        }
    }
}

module.exports = UserController;
