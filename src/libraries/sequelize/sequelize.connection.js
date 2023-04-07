import { Sequelize } from 'sequelize';

import setupModels from './models/index.js';
import record from '../../services/logger.service.js';
import config from '../../config/index.js';

const conData = {
    host: config.db.HOST,
    port: config.db.PORT,
    username: config.db.USER,
    password: config.db.PASS,
    database: config.db.DBNAME,
    dialect: config.db.CONTYPE,
    timezone: '-05:00',
    ssl: config.db.SSL,
    logging: (msg) => record.sql(msg)
};

function dbConnect(options) {
    let sequelize = new Sequelize(options);
    record.info(`Database selected: ${options.dialect}`);

    sequelize.authenticate()
        .then(() => {
            setupModels(sequelize);
            sequelize.sync({ alter: config.sync.ALTER, force: config.sync.FORCE });
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

export default sequelize;