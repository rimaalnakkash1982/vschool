var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female"]
  }
});

module.exports = mongoose.model("Student", studentSchema);