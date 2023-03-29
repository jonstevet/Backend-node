const winston = require('winston');
require('winston-daily-rotate-file');
require('dotenv').config();
const path = require('path');


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
        level: process.env.LOGGING_CONSOLE_LEVEL || 'debug',
        format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.printf((info) => `[${info.label}] [${info.level}]: ${info.message}`),
        ),
    }),
    new winston.transports.DailyRotateFile({
        level: process.env.LOGGING_FILE_LEVEL || 'info',
        dirname: path.join(process.cwd(), 'logs'),
        filename: 'Record-%DATE%.log',
        datePattern: 'YYYYMMDD',
        maxSize: '10m',
        maxFiles: process.env.LOGGING_RETENTION || '30d',
    }),
    new winston.transports.DailyRotateFile({
        level: 'error',
        dirname: path.join(process.cwd(), 'logs'),
        filename: 'Error-%DATE%.log',
        datePattern: 'YYYYMMDD',
        maxSize: '10m',
        maxFiles: process.env.LOGGING_RETENTION || '30d',
    })
];

const record = winston.createLogger({
    level: process.env.LOGGING_LEVEL || 'info',
    levels,
    format,
    transports,
    silent: JSON.parse(process.env.LOGGING_OFF) || false,
});

module.exports = record;