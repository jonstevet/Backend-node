const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const boom = require('@hapi/boom');
require('dotenv').config();
const record = require('./services/logger.service');

const { errorLogger, errorServer, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
app.set( 'port', process.env.PORT || 3000 );

app.use( express.json() );

// CORS, domain access control allow whitelist
const whitelist = [
  undefined,
  'http://localhost:3000',
  'http://127.0.0.1:3000'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.some((item) => item == origin)) {
      callback(null, true);
    } else {
      callback(boom.unauthorized(`Domain: ${origin}, is not allowed.`));
    }
  },
};

app.use( cors(corsOptions) );
//Cors config Ends


//Home end point
app.get('/', (req, res) => {
  res.send('Backend server');
});

//Router
routerApi(app);

//Custom Middlewares
app.use(errorLogger);
app.use(boomErrorHandler);
app.use(errorServer);

//Server start listening on environment specific port
app.listen(app.get('port'), () => {
  record.info(`app listening at http://localhost:${app.get('port')}`);
});