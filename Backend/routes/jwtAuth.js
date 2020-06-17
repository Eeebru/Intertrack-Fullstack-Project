const router = require("express").Router();
const pool = require("../dbConfig");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const checkAuth = require("../middleware/authorization");

router.post("/register", validInfo, async (req, res) => {
  try {
    const {
      name,
      email,
      password
    } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).json("User already exist");
    }
    //Bcrypt passowrd
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);
    // Add user
    const newUser = await pool.query(
      "INSERT INTO users  (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    //generate jwt token
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({
      token
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

//Login route
router.post("/login", validInfo, async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }
    //generate token
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({
      token
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.get("/is-verify", checkAuth, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;