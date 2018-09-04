
//DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.Promise = Promise;
//============================================

// Declare and Configure the APP

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + '/public'));

// var routes = require('./controllers/controller.js');
// app.use('/', routes);
//============================================

// Define the port and log it

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Success: Running on Port 3000");
});