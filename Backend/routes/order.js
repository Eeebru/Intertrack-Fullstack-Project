const express = require("express");
const router = express.Router();
const db = require("../db");
const auth = require("../middleware/userAuth");



router.post("/orderproduct", auth, async (req, res) => {

  //only product_id from req.body because it's the only one that we would be getting from the product data, when were sending from front
	try {
				const { product_id } = req.body;

				//these are pre-set
				const user_id = req.id,
					order_date = new Date(),
					expiry_date = new Date(
						new Date().setMonth(new Date().getMonth() + 1)
					), //add one month to the order date
					is_active = expiry_date > order_date ? true : false; //this would always be true, we would use this "(expiry_date > expiry_date ? false : true );" to update it from the front, or we might just make do with order and expiry date to determing if the order is active or not from the front.

				const order = await db.query(
					"INSERT INTO orders (user_id, product_id, order_date, expiry_date, is_active) VALUES ($1,$2,$3,$4,$5) RETURNING * ",
					[user_id, product_id, order_date, expiry_date, is_active]
				);

				res.status(200).json({ result: order.rows[0] });
			} catch (error) {
		console.log(error);
	}
});

module.exports = router;