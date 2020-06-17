require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Nnamdi",
  host: "localhost",
  port: "5432",
  database: "login",
});

pool.on("connect", () => {
  console.log("connected to the db");
});

module.exports = pool;