var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var ejs=require("ejs");
var path=require("path");

mongoose.connect("mongodb://localhost/friend")

var PORT=process.env.Port||8080;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var filesRouter=require("./files.js");
var apiRounter=require("./api.js");

app.use(filesRouter);
app.use("/friend",apiRounter);

//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("views engine", "ejs");



app.listen(PORT, function () {
    console.log("you are runinng port :" + PORT);
});
