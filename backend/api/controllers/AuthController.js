const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4 } = require('uuid');
const { User } = require('../../models/associations');
const { mysqldb } = require('../../models/engine/mysql');
const validatePhoneNo = require('../utils/validate_phoneno')

class AuthController {
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

        const user = await mysqldb.get(User, filter);
        if (user) {
            res.status(400).json({ status: 'failed', message: 'user exists, use another username' });
            return;
        }
        try {
            const salt = await bcrypt.genSalt(10)
            password = await bcrypt.hash(password, salt)
            const obj = { password, username };
            const newUser = await mysqldb.createModel(User, obj);
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
        let user;
        try {
            user = await mysqldb.get(User, filter);
            if (!user) {
                res.status(400).json({ status: 'bad request', message: 'account not found' });
                return;
            }
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                res.status(400).json({ status: 'bad request', message: 'invalid password' });
                return;
            }
            delete user.password;
        } catch(err) {
            console.log(err);
            res.status(500).json({ error: "internal server error" });
            return;
        }
        // generates jwt
        const token = jwt.sign({ email: user.username }, process.env.SECRET_KEY, { expiresIn: '15h' });
        res.setHeader('Access-Control-Expose-Headers', 'Authorization');
        res.status(200).header('Authorization', `Bearer ${token}`).json({ status: 'success', user});
        return
    }

}

module.exports = AuthController;