const Sequelize = require('sequelize');
const dbConfig = require('../Config/DbConfig');

const connection = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

module.exports = connection;