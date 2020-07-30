// const {Client } = require('pg');
// require('dotenv').config();

// const client = new Client({
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.PORT,
// });

// client.connect();

// module.exports = client;


const { Client } = require("pg");

const conString = process.env.conString;
const client = new Client(conString);

client.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err);
	}
	client.query('SELECT NOW() AS "theTime"', function (err, result) {
		if (err) {
			return console.error("error running query", err);
		}
		console.log("Database connected");

		client.end();
	});
});

module.exports = client;