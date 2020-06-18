const express = require('express');
const router = express.Router();
const db = require('../db');
const authorization = require('../middleware/userAuth');

router.get('/', authorization, async (req, res) => {
  try {
    const user = await db.query('SELECT * FROM users WHERE id=$1', [req.user]);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
