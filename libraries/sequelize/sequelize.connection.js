require('dotenv').config();
const { Sequelize } = require('sequelize');
const setupModels = require('./models');
const record = require('../../services/logger.service');

const conOptions = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: encodeURIComponent(process.env.DB_USER) || 'root',
    password: encodeURIComponent(process.env.DB_PASS) || 'root',
    database: process.env.DB_DBNAME || 'database',
    dialect: process.env.DB_CONTYPE,
    timezone: '-05:00',
    ssl: false,
    logging: msg => record.sql(msg),
};

const options = conOptions.dialect == 'sqlite' || !conOptions.dialect ? 'sqlite::memory:' : conOptions;

const sequelize = new Sequelize(options);
record.info(`Database selected: ${sequelize.options.dialect}`);

sequelize.authenticate().then(() => {

  setupModels(sequelize).forEach(
    (model) => {
      model.sync({ force: false });
      record.info(`Model ${model.name} synchronized successfully.`);
    });

  record.info('Connection whit DB have been established successfully.');

}).catch(err => {

  record.error('Error while connect to the database:', err);

});

module.exports = sequelize;