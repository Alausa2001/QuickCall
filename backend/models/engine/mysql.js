#!/usr/bin/node
require('dotenv').config();
// console.log(process.env);
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const database = process.env.QUICK_CALL_DB;
const user = process.env.QUICK_CALL_USER;
const pwd = process.env.QUICK_CALL_PWD;
const port = process.env.QUICK_CALL_PORT;

/* db connection */
const sequelize = new Sequelize(database, user, pwd, {
  port,
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  timezone: '+01:00',
});

class MysqlClient {
  constructor() {
    this.mysqlClient = sequelize;
  }

  async isConnected() {
    try {
      await this.mysqlClient.authenticate();
      console.log('mysqlClient is connected');
    } catch (err) {
      console.error(`Unable to connect to database: ${err}`);
    }
  }

  async close() {
    await this.mysqlClient.close();
  }

  async createModel(model, obj, fields = null) {
    /* create a new models in the database
     * model: corresponds to a table
     * If field is null all attributes in obj are added, else
     * only the fields specified are added to the model
     *
     * DataTypes
     * obj = object, fields = array, model = sequelize model instance
     */
    let bulk = new Array();

    if (fields !== null) {
      if (Array.isArray(obj)) {
        const newModel = await model.bulkCreate(obj, { fields });
        for (let obj of newModel) {
          bulk.push(obj.dataValues);
        }
        return bulk;
      }
      const newModel = await model.create(obj, { fields });
      return newModel.dataValues;
    }

    if (Array.isArray(obj)) {
      const newModel = await model.bulkCreate(obj);
      for (let obj of newModel) {
        bulk.push(obj.dataValues);
      }
      return bulk;
    }
    const newModel = await model.create(obj);
    return newModel.dataValues;
  }

  async get(model, filter, fields = null) {
    if (model) {
      if (fields === null) {
        const record = await model.findOne({ raw: true, where: filter });
        return record;
      }
      else if (fields !== null) {
        const record = await model.findOne({ raw: true, where: filter, attributes: fields });
        return record;
      }
      return null;
    }
    return null;
  }

  async update(model, filter, field) {
    if (model) {
      const updatedModel = await model.update(field, { raw: true, where: filter });
      return updatedModel
    }
    return null;
  }
  
  async getAll(model, filter, fields = null) {
    try {
      if (fields == null) {
        const records = await model.findAll({where: filter, raw: true});
        return records;
      }
      const records = await model.findAll({where: filter, raw: true, attributes: fields});
      return records 
    } catch(err) {
      throw new Error(err);
    }
  }

  async getPage(model, filter = null, fields = null, page, limit) {
    try {

      const count = await model.count({ where: filter });
      const offset = limit * (page - 1);
      
      if (fields == null && filter != null) {
        const records = await model.findAll({ where: filter, raw: true, limit, offset });
        return { data: records, page, total: count};;
      }

      if (fields != null && filter == null) {
        const records = await model.findAll({ raw: true, limit, offset, attributes: fields });
        return { data: records, page, total: count};;
      }

      const records = await model.findAll({where: filter, raw: true, attributes: fields, limit, offset});
      return { records, page, total: count };
    } catch (err) {
      throw new Error(err);
    }
  }
}

const mysqldb = new MysqlClient();
mysqldb.isConnected();

module.exports = { sequelize, mysqldb };
