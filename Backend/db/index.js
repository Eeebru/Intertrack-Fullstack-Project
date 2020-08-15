// const { Client } = require('pg');
// require('dotenv').config();
// const conString = process.env.CON_STRING;
// const client = new Client(conString);
// client.connect();
// const conString =
//   'postgres://xkyjplyb:8JY4KHGtExYaEEga_4dkVwJugdRBaKEF@ruby.db.elephantsql.com:5432/xkyjplyb';
// const client = new Client(conString);
// client.connect(function (err) {
//   if (err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function (err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log('Contected to Database');
//     client.end();
//   });
// });
// module.exports = client;
