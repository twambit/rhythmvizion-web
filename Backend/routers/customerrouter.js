const express = require("express");
const router = express.Router();
const db = require("../db");



router
    .route("/customers")
    .get(async (req, res) => {
        const customers = await db("customers").orderBy('id', 'desc');
        res.status(200).json(customers)
        // pool.query('SELECT * FROM customers ORDER BY id DESC', (error, results) => {
        //     if (error) {
        //         throw error
        //     }
        //     res.status(200).json(results.rows)
        // })
    });

router
    .route("/customers/:id")
    .get(async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            const customers = await db("customers").where('id', id)
            res.status(200).json(customers);
            // pool.query('SELECT name,number,email,notes FROM customers WHERE id = $1', [id], (error, results) => {
            //     if (error) {
            //         res.json({ status: "Some error occured" });
            //         return
            //     }
               
            // })
        }
        catch {
            res.json({ status: "Some error occured" });
        }
    });


router
    .route("/customers")
    .post(async (req, res) => {
        // try {
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
            const customers = await db("customers").insert({
                name:name,
                number:number,
                email:email,
                notes:notes,
                user_id:user_id
            })
            .then(function (id) {
                res.status(201).send(`Customers added Sucessfully`)
            });
            

            // pool.query('INSERT INTO customers (name, number,email, notes,user_id) VALUES ($1, $2,$3,$4,$5)', [name, number, email, notes, user_id], (error, results) => {
            //     if (error) {
            //         res.json({ status: "Some error occured" });
            //         return;
            //     }
                
            // })
        // }
        // catch {
        //     res.json({ status: "Some error occured" });
        // }
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
            const customers = await db("customers").where('id', id).update({
                name:name,
                number:number,
                email:email,
                notes:notes
            })
            .then(function (id) {
                res.status(201).send(`Customers Data Updated Sucessfully`)
            });

            // pool.query('UPDATE customers SET name=$1, number=$2,email=$3, notes=$4 WHERE id = $5', [name, number, email, notes,id], (error, results) => {
            //     if (error) {
            //         res.json({ status: "Some error occured" });
            //         return;
            //     }
            //     res.status(201).send(`Customers updated with ID: ${id}`)
            // })
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
            const customers = await db("customers").where("id",id).del()
            .then(function (id) {
                res.status(201).send(`Customers Data Deleted Sucessfully`)
            });


            // pool.query('DELETE FROM customers WHERE id = $1', [id], (error, results) => {
            //     if (error) {
            //         res.json({ status: "Some error occured" });
            //         return;
            //     }
            //     res.status(200).send(`Customers deleted with ID: ${id}`)
            // })
        }
        catch {
            res.json({ status: "Some error occured" });
        }
    });
module.exports = router;