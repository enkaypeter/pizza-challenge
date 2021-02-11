'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const orders = require('../api/db/models/orders');
const basename = path.basename(__filename);
const config =  require("../config");
const { database } = config;
const db = {};

async function applyExtraSetup(sequelizeInstance) {
  const { Customers, OrderItems, Orders, Pizza } = sequelizeInstance.models;

Pizza.belongsTo(OrderItems);
OrderItems.hasMany(Orders);
Customers.belongsTo(Orders);

}


const sequelize = new Sequelize(database.name, database.username, database.password, {
  dialect: 'mysql',
  host: database.host,
  port: database.port
});

fs
  .readdirSync(process.cwd()+"/src/api/db/models")
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(process.cwd()+"/src/api/db/models", file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// applyExtraSetup(sequelize).then(() => console.log("hereee"));


// sequelize.sync({ force: true }).then(() => console.log("All models were synchronized successfully."))

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
