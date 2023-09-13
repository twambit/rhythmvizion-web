const express = require("express");
const router = express.Router();
const db = require("../db");

router
    .route("/api/login")
    // .get(async (req, res) => {
    //     if (req.session.user && req.session.user.username) {
    //         res.json({ loggedIn: true, username: req.session.user.username });
    //     } else {
    //         res.json({ loggedIn: false });
    //     }
    // })
    .post(async (req, res) => {
        const users = await db("users").where({username: req.body.username })
        .first()
        .then(retrievedUser => {
            if(!retrievedUser) {
                res.json({ loggedIn: false, status: "Wrong username or password!" });
                console.log("Incorrect password");
            }
            else
            if (req.body.password == retrievedUser.password) {
                res.json({ loggedIn: true, userid: retrievedUser.user_id});
            } else {
                res.json({ loggedIn: false, status: "Wrong username or password!" });
                console.log("Incorrect password");
            }
        });
        // if (users.rowCount > 0) {
        //     if (req.body.password == potentialLogin.rows[0].password) {
        //         // req.session.user = {
        //         //     username: req.body.username,
        //         //     id: potentialLogin.rows[0].user_id,
        //         // };
        //         res.json({ loggedIn: true, userid: potentialLogin.rows[0].user_id});
        //     } else {
        //         res.json({ loggedIn: false, status: "Wrong username or password!" });
        //         console.log("Incorrect password");
        //     }
        // } else {
        //     console.log("Incorrect username");
        //     res.json({ loggedIn: false, status: "Wrong username or password!" });
        // }
    });

module.exports = router;