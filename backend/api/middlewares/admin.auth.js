#!/usr/bin/node

const jwt = require('jsonwebtoken');
const { Admin } = require('../../models/associations');
const { mysqldb } = require('../../models/engine/mysql');


async function authorization(req, res, next) {
  const auth = req.get('Authorization');
  if (auth && auth.split(' ')[0] === 'Bearer') {
    const token = auth.split(' ')[1];
    
    let username;
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      username = decoded.username;
      if (!username) {
        res.status(401).json({ status: 'unathorized', message: 'admin not authorized' });
        return;
      }
    } catch(err) {
      console.log(err)
      res.status(500).json({ status: 'internal server error', message: 'error occurred during user verification' });
      return;
    }

    const filter = { username };
    try {
      const user = await mysqldb.get(Admin, filter);
      if (user) {
        res.locals.username = username;
        next();
      } else {
        res.status(401).json({ status: 'unathorized', message: 'admin not authorized' });
      }
    } catch(err) {
      console.log(err);
      res.status(500).json({ status: 'internal server error', message: 'error occurred during user verification' });
    }
  } else {
    res.status(401).json({ status: 'unathorized', message: 'admin not authorized' });
  }
}


module.exports = authorization;