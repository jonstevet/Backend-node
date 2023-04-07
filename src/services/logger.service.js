import winston from 'winston';
import 'winston-daily-rotate-file';
import path from 'path';

import config from '../config/index.js';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    sql: 4,
    debug: 5,
    silly: 6,
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    sql: 'blue',
    debug: 'white',
    silly: 'cyan',
};

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp( { format: 'YYYY-MM-DDTHH:mm:ss.msz' }),
    winston.format.label({ label: 'Record' }),
    winston.format.printf((info) => `[${info.label}] ${info.timestamp} - ${info.level}: ${info.message}`),
);

const transports = [
    new winston.transports.Console({
        level: config.logger.CONSOLE_LEVEL,
        format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.printf((info) => `[${info.label}] [${info.level}]: ${info.message}`),
        ),
    }),
    new winston.transports.DailyRotateFile({
        level: config.logger.FILE_LEVEL,
        dirname: path.join(process.cwd(), 'logs'),
        filename: 'Record-%DATE%.log',
        datePattern: 'YYYYMMDD',
        maxSize: '10m',
        maxFiles: config.logger.RETENTION,
    }),
    new winston.transports.DailyRotateFile({
        level: 'error',
        dirname: path.join(process.cwd(), 'logs'),
        filename: 'Error-%DATE%.log',
        datePattern: 'YYYYMMDD',
        maxSize: '10m',
        maxFiles: config.logger.RETENTION,
    })
];

const record = winston.createLogger({
    level: config.logger.LEVEL,
    levels,
    format,
    transports,
    silent: config.logger.OFF,
});

export default record;