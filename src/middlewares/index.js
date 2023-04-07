import cors from "cors";
import express from "express";

import corsOptions from "./cors.handler.js";
import errorHandler from "./error.handler.js";
import record from "../services/logger.service.js";

export default function (app) {
    // Body Parser
    app.use(express.json());

    // CORS, domain access control allow only whitelist
    record.info('charging cors handler');
    app.use(cors(corsOptions));

    //Error Handler Middlewares (logger, orm, boom, server)
    (function (){
        errorHandler.forEach((item) => {
            record.info('charging error handler: '+ item.name);
            app.use(item);
        });
    })();
}