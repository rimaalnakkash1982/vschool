var mongoose = require("mongoose");

var Person = require("./freind.js");

mongoose.connect("mongodb://localhost/School");

var rima  = new Person ({
    name : "rima",
    age: 15
});

rima.save(function(err,data){
    if(err){
        console.log(err);
    }else{
        Person.find({},function(err,Person){
            if(err){
                console.log(err);
            } else{
                console.log(Person);
            }       
        });
    }
    
});