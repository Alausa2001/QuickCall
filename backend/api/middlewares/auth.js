#!/usr/bin/node

const jwt = require('jsonwebtoken');
const { User } = require('../../models/associations');
const { mysqldb } = require('../../models/engine/mysql');


async function authorization(req, res, next) {
  const auth = req.get('Authorization');
  if (auth && auth.split(' ')[0] === 'Bearer') {
    const token = auth.split(' ')[1];
    
    let email;
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      email = decoded.email;
      if (!email) {
        res.status(401).json({ status: 'unathorized', message: 'user not verified' });
        return;
      }
    } catch(err) {
      console.log(err)
      res.status(500).json({ status: 'internal server error', message: 'error occurred during user verification' });
      return;
    }

    const filter = { email };
    res.locals.email = email;
    try {
      const user = await mysqldb.get(User, filter);
      if (user) {
        next();
      } else {
        res.status(401).json({ status: 'unathorized', message: 'user not verified' });
      }
    } catch(err) {
      console.log(err);
      res.status(500).json({ status: 'internal server error', message: 'error occurred during user verification' });
    }
  } else {
    res.status(401).json({ status: 'unathorized', message: 'user not verified' });
  }
}


module.exports = authorization;