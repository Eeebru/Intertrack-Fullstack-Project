const { Client } = require("pg");
require("dotenv").config();
const conString =  'postgres://xkyjplyb:8JY4KHGtExYaEEga_4dkVwJugdRBaKEF@ruby.db.elephantsql.com:5432/xkyjplyb';
const client = new Client(conString);
client.connect();

module.exports = client;
