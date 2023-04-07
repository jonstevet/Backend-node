import dotenv from 'dotenv';

dotenv.config({
    path: '.env.'+process.env.NODE_ENV
});

export default {
    main: {
        API_URL: process.env.API_URL || 'http://localhost:3000/api/v1',
        NODE_ENV: process.env.NODE_ENV || 'development',
        HOST: process.env.HOST || 'localhost',
        PORT: process.env.PORT || '3000',
    },
    db: {
        HOST: process.env.DB_HOST || 'localhost',
        PORT:
            typeof process.env.DB_PORT == 'string'
                ? parseInt(process.env.DB_PORT)
                : process.env.DB_PORT || 5432,
        USER: encodeURIComponent(process.env.DB_USER) || 'postgres',
        PASS: encodeURIComponent(process.env.DB_PASS) || 'postgres',
        DBNAME: process.env.DB_DBNAME || 'postgres',
        SSL:
            typeof process.env.DB_SSL == 'string'
                ? JSON.parse(process.env.DB_SSL)
                : process.env.DB_SSL || false,
        CONTYPE: process.env.DB_CONTYPE || 'postgres',
    },
    logger: {
        LEVEL: process.env.LOG_LEVEL || 'info',
        FILE_LEVEL: process.env.LOG_FILE_LEVEL || 'info',
        CONSOLE_LEVEL: process.env.LOG_CONSOLE_LEVEL || 'info',
        RETENTION: process.env.LOG_RETENTION || '30d',
        OFF:
            typeof process.env.LOG_OFF == 'string'
                ? JSON.parse(process.env.LOG_OFF)
                : process.env.LOG_OFF || false,
    },
    sync: {
        ALTER:
            typeof process.env.DB_SYNC_ALTER == 'string'
                ? JSON.parse(process.env.DB_SYNC_ALTER)
                : process.env.DB_SYNC_ALTER || false,
        FORCE:
            typeof process.env.DB_SYNC_FORCE == 'string'
                ? JSON.parse(process.env.DB_SYNC_FORCE)
                : process.env.DB_SYNC_FORCE || false,
    },
};
