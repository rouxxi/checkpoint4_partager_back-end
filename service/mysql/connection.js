const mysql = require('mysql');
require('dotenv').config()

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    timezone: 'Europe/Paris',
})

connection.connect();

module.exports = connection;