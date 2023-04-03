const { Sequelize } = require('sequelize');

const setupModels = require('./models');
const record = require('../../services/logger.service');
const { db } = require('../../config');

const conData = {
    host: db.HOST,
    port: db.PORT,
    username: db.USER,
    password: db.PASS,
    database: db.DBNAME,
    dialect: db.CONTYPE,
    timezone: '-05:00',
    ssl: db.SSL,
    logging: (msg) => record.sql(msg)
};

function dbConnect(options) {
    let sequelize = new Sequelize(options);
    record.info(`Database selected: ${options.dialect}`);

    sequelize.authenticate()
        .then(() => {
            setupModels(sequelize);
            sequelize.sync({ alter: false, force: false });
            record.info('Database synchronized successfully.');

            record.info('Connection whit DB have been established successfully.');
        })
        .catch((err) => {
            record.error('Error in database connection:', err);

            record.warn('Trying to reconnect in 10 seconds...');
            setTimeout(() => dbConnect(conData), 10000);
        });

    return sequelize;
}

let sequelize = dbConnect(conData);

module.exports = sequelize;