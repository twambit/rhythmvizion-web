const express = require("express");
const router = express.Router();
const pool = require("../db");



router
    .route("/customers")
    .get(async (req, res) => {
        pool.query('SELECT * FROM customers ORDER BY id DESC', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    });

router
    .route("/customers/:id")
    .get(async (req, res) => {
        const id = parseInt(req.params.id)
        try {

            pool.query('SELECT name,number,email,notes FROM customers WHERE id = $1', [id], (error, results) => {
                if (error) {
                    res.json({ status: "Some error occured" });
                    return
                }
                res.status(200).json(results.rows)
            })
        }
        catch {
            res.json({ status: "Some error occured" });
        }
    });


router
    .route("/customers")
    .post(async (req, res) => {
        try {
            const {
                name,
                number,
                email,
                notes,
                user_id
            } = req.body
            if (name.length > 255) {
                res.json({ status: "Name text is greater than 255 characters" });
                return;
            }
            if (number.length > 15) {
                res.json({ status: "Number text is greater than 15 characters" });
                return;
            }
            if (email.length > 255) {
                res.json({ status: "Email text is greater than 255 characters" });
                return;
            }
            pool.query('INSERT INTO customers (name, number,email, notes,user_id) VALUES ($1, $2,$3,$4,$5)', [name, number, email, notes, user_id], (error, results) => {
                if (error) {
                    res.json({ status: "Some error occured" });
                    return;
                }
                res.status(201).send(`Customers added with ID: ${results.insertId}`)
            })
        }
        catch {
            res.json({ status: "Some error occured" });
        }
    });

    router
    .route("/customers/:id")
    .put(async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const {
                name,
                number,
                email,
                notes                
            } = req.body
            if (name.length > 255) {
                res.json({ status: "Name text is greater than 255 characters" });
                return;
            }
            if (number.length > 15) {
                res.json({ status: "Number text is greater than 15 characters" });
                return;
            }
            if (email.length > 255) {
                res.json({ status: "Email text is greater than 255 characters" });
                return;
            }
            pool.query('UPDATE customers SET name=$1, number=$2,email=$3, notes=$4 WHERE id = $5', [name, number, email, notes,id], (error, results) => {
                if (error) {
                    res.json({ status: "Some error occured" });
                    return;
                }
                res.status(201).send(`Customers updated with ID: ${id}`)
            })
        }
        catch {
            res.json({ status: "Some error occured" });
        }
    });

    router
    .route("/customers/:id")
    .delete(async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            pool.query('DELETE FROM customers WHERE id = $1', [id], (error, results) => {
                if (error) {
                    res.json({ status: "Some error occured" });
                    return;
                }
                res.status(200).send(`Customers deleted with ID: ${id}`)
            })
        }
        catch {
            res.json({ status: "Some error occured" });
        }
    });
module.exports = router;