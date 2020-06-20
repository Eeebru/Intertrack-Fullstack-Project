const express = require("express");
const router = express.Router();
const db = require("../db");
const auth = require("../middleware/userAuth");
const moment = require('moment');



router.post("/orderproduct", auth, async (req, res) => {
	try {
		const {
			product_id,
    } = req.body;

    const user_id = req.id,
			order_date = new Date(),
			expiry_date = new Date(new Date().setMonth(new Date().getMonth() + 1)),
			is_active = expiry_date > order_date ? true : false;
    
		const order = await db.query("INSERT INTO orders (user_id, product_id, order_date, expiry_date, is_active) VALUES ($1,$2,$3,$4,$5) RETURNING * ", [user_id, product_id, order_date, expiry_date, is_active]);

		res.status(200).json({ result: order.rows[0] });
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;