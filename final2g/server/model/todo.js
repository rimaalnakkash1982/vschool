//var mongoose = require("mongoose");
//var Schema = mongoose.Schema;
//var todoSchema = new Schema({
//    name: {
//        type: String,
//        required: true,
//        unique:true
//    },
//    cost:{
//        type:Number
//    },
//    isDone:{
//        type:Boolean
//    }
//  
//});
//
//module.exports = mongoose.model('Todos', todoSchema);
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var menuSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    description: {
        type: String
        
    },
    upVoted: {
        type: Number,
        default: 0
    },
    downVoted: {
        type: Number,
        default: 0
    },
    Comment: [String]
});

module.exports = mongoose.model('Todos', menuSchema);