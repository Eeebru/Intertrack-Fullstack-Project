const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/userAuth');
// const moment = require('moment');

router.get('/', auth, async (req, res) => {
  try {
    //query orders that the user have
    const userOrders = await db.query(
      `select * from public."order" where user_id=$1`,
      [req.id]
    );
    let arr = [];
    for (let i = 0; i < userOrders.rows.length; i++) {
      //query the products details where it is equal to the product id in the user's order
      const products = await db.query(
        `select * from public.product where id=$1`,
        [userOrders.rows[i].product_id]
      );
      //store in an array
      arr.push(products.rows[0]);
    }
    //query user's details,
    const user = await db.query(`SELECT * FROM public."user" where id=$1`, [
      req.id,
    ]);
    //user's details and their orders(with product details all in json)
    res.json({
      userObj: user.rows[0],
      offers: arr,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
});

router.patch('/:id', auth, async (req, res, next) => {
  try {
    let {
      name,
      email,
      address,
      dob,
      job,
      gender,
      residential_status,
      dependants,
    } = req.body;
    const result = await db.query(
      `UPDATE public."user" SET name=$1, email=$2, address=$3, dob=$4, job=$5, gender=$6, residential_status=$7, dependants=$8 WHERE id=$9 RETURNING *`,
      [
        name,
        email,
        address,
        dob,
        job,
        gender,
        residential_status,
        dependants,
        req.params.id,
      ]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
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
