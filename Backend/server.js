const express = require("express");
const app = express();
const {
  pool
} = require("./dbConfig");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
//Register and Login Routes
app.use("/auth", require("./routes/jwtAuth"));

//Dashboard routes
app.use("/dashboard", require("./routes/dashboard"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});