var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Schema = new Schema({
    name : String,
    age : Number
});


module.exports = mongoose.model("Person",Schema);
