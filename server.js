
//DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var hbs = require("express-handlebars");

mongoose.Promise = Promise;
//============================================

// Declare and Configure the APP

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + '/public'));

//using handlebars - setting the main page
app.set('views', path.join(_dirname, "views"));
app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require('./controllers/controller.js');
 app.use('/', routes);
//============================================


//catch 404 and forward to error handler
app.use(function(req, res, next){
    var err = new Error ("Not Found");
    err.status = 404;
    next(err);

    });

// Define the port and log it

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Success: Running on Port 3000");
});