const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
const jwtGen = require('../utils/jwtGen');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/userAuth');

//Sign in
router.post('/signup', validInfo, async (req, res, next) => {
  try {
    const {
      name,
      password,
      confirmPassword,
      gender,
      date_of_birth,
      email,
      address,
      state,
    } = req.body;

    if (password.length < 6) {
      return res
        .status(400)
        .json({ status: 400, message: 'Password is less than 6 characters' });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ status: 400, message: 'Password does not match' });
    }
    const user = await db.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res
        .status(401)
        .json({ message: `User with email ${email} already exist` });
    }
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await db.query(
      'INSERT INTO users (name, email, password, gender, date_of_birth, address, state) VALUES($1,$2,$3,$4,$5,$6,$7)  RETURNING *',
      [name, email, bcryptPassword, gender, date_of_birth, address, state]
    );
    const token = jwtGen(newUser.rows[0].id);
    res
      .status(201)
      .json({ token, message: 'User created successfully', status: 201 });
  } catch (err) {
    return next(err);
  }
});

// login
router.post('/login', validInfo, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await db.query(
      'SELECT * FROM users WHERE email = $1 LIMIT 1',
      [email]
    );
    if (user.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid Credential' });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Incorrect Password' });
    }

    const token = jwtGen(user.rows[0].id);

    res.json({ token });
  } catch (err) {
    // console.error(err.message);
    // res.status(500).send('Server Error');
    return next(err);
  }
});

router.get('/verify', authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
