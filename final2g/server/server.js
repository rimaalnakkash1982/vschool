var express = require("express");
var app = express();
var mongoose=require("mongoose")
var bodyParser = require("body-parser");
var apiRouter = require("./route/api.js");
var authRouter=require("./route/auth.js");
var config=require("./config.js");
var expressJwt=require("express-jwt");
var filesRouter = require("./route/files.js");
var PORT = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost/Todoss'+ config.database);

app.use(bodyParser.urlencoded({extended: false}));

var ejs = require("ejs");
var path = require("path");
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");
app.engine("html", ejs.renderFile);
app.set("views engine", "ejs");

app.use(bodyParser.json());

//app.use("/api",expressJwt({secret:config.secret}));
app.use("/api",apiRouter);
app.use("/auth",authRouter);
app.use(filesRouter);



app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
});