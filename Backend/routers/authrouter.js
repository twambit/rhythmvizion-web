const express = require("express");
const router = express.Router();
const pool = require("../db");

router
    .route("/api/login")
    .get(async (req, res) => {
        if (req.session.user && req.session.user.username) {
            res.json({ loggedIn: true, username: req.session.user.username });
        } else {
            res.json({ loggedIn: false });
        }
    })
    .post(async (req, res) => {
        const potentialLogin = await pool.query(
            "SELECT user_id, username, password FROM users u WHERE u.username=$1",
            [req.body.username]
        );
        if (potentialLogin.rowCount > 0) {
            if (req.body.password == potentialLogin.rows[0].password) {
                // req.session.user = {
                //     username: req.body.username,
                //     id: potentialLogin.rows[0].user_id,
                // };
                res.json({ loggedIn: true, userid: potentialLogin.rows[0].user_id});
            } else {
                res.json({ loggedIn: false, status: "Wrong username or password!" });
                console.log("Incorrect password");
            }
        } else {
            console.log("Incorrect username");
            res.json({ loggedIn: false, status: "Wrong username or password!" });
        }
    });

module.exports = router;