const express = require('express');
const routerApi = require('./routes');

const { errorLogger, errorServer, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

//Home end point
app.get('/', (req, res) => {
  res.send('Hola, este es mi backend server');
});

routerApi(app);

app.use(errorLogger);
app.use(boomErrorHandler);
app.use(errorServer);


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});