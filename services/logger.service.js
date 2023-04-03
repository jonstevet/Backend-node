const winston = require('winston');
require('winston-daily-rotate-file');
const path = require('path');
const { logger } = require('../config');

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
        level: logger.CONSOLE_LEVEL,
        format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.printf((info) => `[${info.label}] [${info.level}]: ${info.message}`),
        ),
    }),
    new winston.transports.DailyRotateFile({
        level: logger.FILE_LEVEL,
        dirname: path.join(process.cwd(), 'logs'),
        filename: 'Record-%DATE%.log',
        datePattern: 'YYYYMMDD',
        maxSize: '10m',
        maxFiles: logger.RETENTION,
    }),
    new winston.transports.DailyRotateFile({
        level: 'error',
        dirname: path.join(process.cwd(), 'logs'),
        filename: 'Error-%DATE%.log',
        datePattern: 'YYYYMMDD',
        maxSize: '10m',
        maxFiles: logger.RETENTION,
    })
];

const record = winston.createLogger({
    level: logger.LEVEL,
    levels,
    format,
    transports,
    silent: logger.OFF,
});

module.exports = record;