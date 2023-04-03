const express = require("express");
const cors = require("cors");
const Boom = require("@hapi/boom");
const { main } = require("./config");

const router = require("./router");
const record = require("./services/logger.service");
const errorHandler = require("./middlewares/error.handler");

const app = express();

app.use(express.json());

// CORS, domain access control allow only whitelist
const whitelist = [
   undefined,
   "http://localhost:3000",
   "http://127.0.0.1:3000",
   "http://localhost:4200"
];

const corsOptions = {
   origin: (origin, callback) => {
      if (whitelist.some((item) => item == origin)) {
         callback(null, true);
      } else {
         callback(Boom.unauthorized(`Domain: ${origin}, is not allowed.`));
      }
   },
};

app.use(cors(corsOptions));

//Router
router(app);

//Custom Middlewares
app.use(errorHandler.logger);
app.use(errorHandler.orm);
app.use(errorHandler.boom);
app.use(errorHandler.server);

//Server start listening on environment specific port
app.listen(main.PORT, () => {
   record.info(`app listening at http://localhost:${main.PORT}`);
});