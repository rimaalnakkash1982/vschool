var mongoose = require("mongoose");
var Voted = require("./voted.js")
var express = require("express");
var apiRouter = express.Router();
var bodyParser = require("body-parser");
var uuid = require("uuid");
mongoose.connect('mongodb://localhost/voted');



apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


apiRouter.get("/voted", function (req, res) {
    Voted.find({}, function (err, data) {
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


apiRouter.post("/voted", function (req, res) {
    var newvoted = new Voted(req.body);
    newvoted.save(function (err, data) {
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

apiRouter.delete("/voted/:id", function (req, res) {
    Voted.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result == undefined) {
            res.status(404).send(err);
        } else {
            result.remove();
            res.status(200).send({
                message: "Item has been deleted"
            });
        }
    })
})

apiRouter.put("/voted/:id", function (req, res) {
    Voted.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result == undefined) {
            res.status(404).send(err);
        } else {
            for (key in req.query) {
                if(key != "comments"){
                   result[key] = req.query[key] 
                }
            }
            if(req.query.comments !== undefined && req.query.comments !== ""){
                result.comments.push(req.query.comments);
            }
            result.save();
            res.status(200).send({
                message: "Item has been updated"
            });
        }
    })
})


module.exports = apiRouter;