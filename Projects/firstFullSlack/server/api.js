var express = require("express");
var mongoose = require("mongoose");
var Freind = require("./schema.js");
var apiRouter=express.Router();


apiRouter.get("/", function (req, res) {
    Freind.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                messege: "there is an err",
                err: err
            })
        } else {
            res.status(200).send({data: data})
        }
    })
});
apiRouter.post("/", function (req, res) {
    var newFriend = new Freind(req.body);
    newFriend.save(function (err, data) {
        if (err) {
            res.status(500).send({
                messege: "there is an err",
                err: err
            })
        } 
         else if (data === undefined) {
            res.status(404).send
        }
        else {
            res.status(200).send(data)
        }
    })
});
apiRouter.delete("/:id", function (req, res) {
var deleteItem = req.params.id;
Freind.findOne({
        _id: deleteItem
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                messege: "there is an err",
                err: err
            })
        } else if (data === undefined) {
            res.status(404).send
        } else {
            data.remove(function (err, data) {
                if (err) {
                    res.status(500).send({
                        messege: "there is an err",
                        err: err
                    });
                } else {
                    res.status(200).send(data);
                }
            })
        }
    })
});
apiRouter.put("/:id", function (req, res) {
    var deleteItem = req.params.id;
    Freind.findOne({
        _id: deleteItem
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                messege: "there is an err",
                err: err
            })
        } else if (data === undefined) {
            res.status(404).send()
        } else {
            for (key in req.query) {
                newItem[key] = req.query[key]
            }
            newItem.save(fun);
        }
    })
});
module.exports = apiRouter;