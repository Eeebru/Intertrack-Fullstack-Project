const { Client } = require("pg");
require("dotenv").config();
const conString = process.env.CON_STRING;
const client = new Client(conString);
client.connect();

module.exports = client;
