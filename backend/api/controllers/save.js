static async signup(req, res) {
    let {
      firstName, lastName, email, password, username, phoneNo1, phoneNo2
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
    if (!password) {
        res.status(400).json({ status: 'bad request', message: 'password missing' });
        return;
    }

    if (!username) {
        res.status(400).json({ status: 'bad request', message: 'username missing' });
        return;
    }
    if (!phoneNo1) {
        res.status(400).json({ status: 'bad request', message: 'main phone number missing' });
        return;
    }

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

    const filter = { email };

    const user = await mysqldb.get(User, filter);
    if (user) {
        res.status(400).json({ status: 'failed', message: 'user exists, email taken' });
        return;
    }

    const usernameTaken = await mysqldb.get(User, { username });
    
    if (usernameTaken) {
        res.status(400).json({ status: 'failed', message: 'username taken' });
        return;
    }

    try {
        const salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)
        const obj = {
            firstName, lastName, email, password, username, phoneNo1, phoneNo2
        };
        const newUser = await mysqldb.createModel(User, obj);
        delete newUser.password;
        res.status(201).json({ status: 'success', newUser });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: `internal server error` });
    }
}
