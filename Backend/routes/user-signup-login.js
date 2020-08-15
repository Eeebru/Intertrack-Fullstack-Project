const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
const jwtGen = require('../utils/jwtGen');
const validInfo = require('../middleware/validInfo');

//Sign up
router.post('/signup', validInfo, async (req, res, next) => {
  try {
    let { name, email, password } = req.body;
    console.log(req.body);

    const user = await db.query(
      `SELECT * FROM public."user" WHERE email = $1`,
      [email]
    );
    if (user.rows.length !== 0) {
      return res
        .status(401)
        .json({ message: `User with email ${email} already exist` });
    }
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await db.query(
      `INSERT INTO public."user" (name, email, password) VALUES($1,$2,$3)  RETURNING *`,
      [name, email, bcryptPassword]
    );
    const token = jwtGen(newUser.rows[0].id);
    res
      .status(201)
      .json({ token, message: 'User Created Successfully', status: 201 });
  } catch (err) {
    return next(err);
  }
});

// login
router.post('/login', validInfo, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await db.query(
      `SELECT * FROM public."user" WHERE email = $1 LIMIT 1`,
      [email]
    );
    if (user.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid Credential(s)' });
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Incorrect Password' });
    }
    const token = jwtGen(user.rows[0].id);
    res.json({ token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
