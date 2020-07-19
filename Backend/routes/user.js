const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/userAuth');
// const moment = require('moment');



router.get('/', auth, async (req, res) => {
  try {
    //query orders that the user have
    const userOrders = await db.query(
			"select * from orders where user_id=$1",
			[req.id]
		);
    let arr = [];
    for (let i = 0; i < userOrders.rows.length; i++) {
      //query the products details where it is equal to the product id in the user's order
      const products = await db.query(
      "select * from products where id=$1",
      [userOrders.rows[i].product_id]
      );
      //store in an array
      arr.push(products.rows[0]);
    }
    //query user's details,
    const user = await db.query(
			"SELECT id, email, gender, address, state FROM users where id=$1",
			[req.id]
    );
    //user's details and their orders(with product details all in json)
    res.json({user: user.rows[0], offers: arr});
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
