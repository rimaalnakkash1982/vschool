var express = require("express");
var authRouter = express.Router();
var User = require("../model/user.js");
var jwt = require("jsonwebtoken");
var config = require("../config.js")

authRouter.post("/signup", function (req, res) {
    User.find({
        username: req.body.username
    }, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else if (data.length > 0) {
            res.status(400).send({
                "message": "Username is taken"
            });
        } else {
            var newUser = new User(req.body);
            newUser.save(
                function (err, data) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).send({
                            "message": "you just signup"
                        });
                    }
                });
        }
    });
});
authRouter.post("/signin", function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) {
            res.status(500).send(err);
        } else if (user == undefined) {
            res.status(404).send({
                "massege": "no username"
            })
        } else if (user.password != req.body.password) {
            res.status(400).send({
                "messege": "password incorrect"
            })
        } else {
            var token = jwt.sign(user.toObject(), config.secret, {
                expiresIn: "1h"
            });
            res.status(200).send({
                "massege": "Here is your key",
                token: token
            })
        }
    })
});

module.exports = authRouter;