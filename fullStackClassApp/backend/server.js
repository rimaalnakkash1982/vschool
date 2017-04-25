var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var studentRouter = require('./routes/studentsRoute');

var app = express();

mongoose.connect('mongodb://localhost/beirutClass', function(){
  console.log("Connected to the database!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/class", studentRouter);

app.listen(8000, function() {
  console.log("Your server is running on port 8000")
});
