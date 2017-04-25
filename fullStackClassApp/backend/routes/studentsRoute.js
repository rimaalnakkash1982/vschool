var express = require('express');
var mongoose = require('mongoose');
var Student = require('../models/studentSchema');

var studentRoute = express.Router();

studentRoute.route("/")
  .get(function(req, res) {
    Student.find(function(err, students) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(students);
      }
    })

  })
  .post(function(req, res) {
    var newStudent = new Student(req.body);
    newStudent.save(function(err, savedStudent) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(savedStudent);
      }
    })
  });

studentRoute.route("/:id")
  .delete(function(req, res){
  var studentID = req.params.id;
  Student.findOneAndRemove({_id:studentID}, function(err, deletedStudent){
    if(err){
      res.status(500).send(err);
    }else{
      res.send(deletedStudent);
    }
  })
})

module.exports = studentRoute;