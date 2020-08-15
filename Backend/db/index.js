const { Client } = require('pg');
require('dotenv').config();
const CON_STRING = process.env.conString;
const client = new Client(CON_STRING);
client.connect();

module.exports = client;