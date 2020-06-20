const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/addproduct", async (req, res) => {
	try {
		const {
			name,
			product_price,
			product_title,
			product_description,
		} = req.body;
		const product = await db.query(
			"INSERT INTO products (name, product_price, product_title, product_description) VALUES ($1,$2,$3,$4) RETURNING * ",
			[name, product_price, product_title, product_description]
		);

		res.status(200).json({ result: product.rows[0] });
	} catch (error) {
		console.log(error);
	}
});

//get products
router.get("/products", async (req, res) => {
	try {
		const prod = await db.query("SELECT * FROM products");
		res.status(200).json(prod.rows);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
