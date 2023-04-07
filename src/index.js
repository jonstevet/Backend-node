import express from 'express';

import config from './config/index.js';
import router from './router/index.js';
import record from './services/logger.service.js';
import middlewares from './middlewares/index.js';

const app = express();

//charge Routes
router(app);

//charge Middlewares
middlewares(app);

//Server start listening on environment specific port
const server = app.listen(config.main.PORT, () => {
    record.info(`Executing in ${config.main.NODE_ENV} mode`);
    record.info(`Server listening at http://${config.main.HOST}:${config.main.PORT}`);
});

module.exports = {app, server};