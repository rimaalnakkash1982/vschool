var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MenuSchema = new Schema({

name:{
    type:String,
    require:true
},
age:{
    type:Number,
    require:true
},
    favoraiteCook:{
      type:String,
        require:true
    }

    }
);
module.exports = mongoose.model("Person",MenuSchema);