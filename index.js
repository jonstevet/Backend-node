const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const boom = require('@hapi/boom');

const { errorLogger, errorServer, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// CORS, domain access control allow whitelist
const whitelist = [
  undefined, //acept same origin
  'http://localhost:3000',
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

//Home end point
app.get('/', (req, res) => {
  res.send('Backend server');
});

routerApi(app);

app.use(errorLogger);
app.use(boomErrorHandler);
app.use(errorServer);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});