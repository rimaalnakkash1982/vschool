var mongoose = require("mongoose");
var Todo = require("../model/todo.js");
var express = require("express");
var apiRouter = express.Router();

apiRouter.get("/", function (req, res) {
    Todo.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });

        } else {
            res.status(200).send({
                message: "here is the data",
                data: data
            })
        }
    })

});


apiRouter.post("/", function (req, res) {
    var newtodo = new Todo(req.body);
    newtodo.save(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });

        } else {
            res.status(200).send({
                message: "here is the data",
                data: data
            })
        }

    })

});

apiRouter.delete("/:id", function (req, res) {
    Todo.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            data.remove();
            res.status(200).send({
                message: "Item has been deleted"
            });
        }
    })
})

apiRouter.put("/:id", function (req, res) {
    Todo.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            for (key in req.query) {
                data[key] = req.query[key]
            }
        }
        data.save(function (err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: "Item has been updated"
                });
            }
        });

    })
});



module.exports = apiRouter;