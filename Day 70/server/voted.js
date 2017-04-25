var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var voteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    likes: Number,
    disLike: Number,
    comments: [String]
});

module.exports = mongoose.model('Voted', voteSchema);