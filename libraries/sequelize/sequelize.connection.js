require("dotenv").config();
const { Sequelize } = require("sequelize");
const setupModels = require("./models");
const record = require("../../services/logger.service");

const conData = {
   host: process.env.DB_HOST || "localhost",
   port: process.env.DB_PORT || 5432,
   username: encodeURIComponent(process.env.DB_USER) || "root",
   password: encodeURIComponent(process.env.DB_PASS) || "root",
   database: process.env.DB_DBNAME || "database",
   dialect: process.env.DB_CONTYPE,
   timezone: "-05:00",
   ssl: false,
   logging: (msg) => record.sql(msg)
};

const options = conData.dialect == "sqlite" || !conData.dialect ? "sqlite::memory:" : conData;

function connect(options) {
   let sequelize = new Sequelize(options);
   record.info(`Database selected: ${options.dialect || "sqlite"}`);

   sequelize.authenticate().then(() => {
      setupModels(sequelize);
      sequelize.sync({ alter: true });
         
      record.info("Connection whit DB have been established successfully.");
   })
   .catch((err) => {
      record.error("Error in database connection:", err);

      record.warn("Trying to reconnect in 10 seconds...");
      setTimeout(() => connect(options), 10000);
   });

   return sequelize;
}

let sequelize = connect(options);

module.exports = sequelize;