const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/userAuth');
// const moment = require('moment');


// we are doing the many to many call here because when a user is logging in they should find their subscriptions on their dashboard
router.get('/', auth, async (req, res) => {
  try {
    const user = await db.query(
			"SELECT u.name, u.email, p.name FROM users u JOIN orders ord ON $1=ord.user_id JOIN products p ON p.id=ord.product_id",
			[req.id]
    );
    console.log(req.id);
    res.json(user.rows);
    console.log(user.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
});


//DON'T DELETE: I used it to get all users and format their dob
// router.get('/', async (req, res)=> {
//   try {
//   const result = await db.query('SELECT * FROM users')
//   res.json(result.rows);

//   //testing the date format
//   console.log(result.rows[2].dob);
//   //formating the date format with moment library
//   console.log(moment(result.rows[2].dob).format('MMMM Do YYYY'))
//   } catch (error) {
//     console.log(error)
//   }
// })

module.exports = router;
