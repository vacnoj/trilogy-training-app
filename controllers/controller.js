var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
var passport = require('passport');
var Strategy = require('passport-local');

var User = require('../models/user.js');


// *************************************************
// Login
// *************************************************
router.post('/users/login', 
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    var user = req.user;
    res.redirect('/');
});

// *************************************************
// Register new User
// *************************************************
router.post('/users/register', function(req, res){
    var newUser = new User({ username: req.body.username, password: req.body.password });
    // console.log('New User', newUser);
    newUser.save(function(err, doc) {
      if(err) {
        console.log('save error', err);
      } else {
        console.log('saved', doc)
        req.login(newUser, function(err) {
          if (err) {
            console.log('login error', err);
          }
          return res.redirect('/');
        });
      }
    });
  })


// *************************************************
// Get Requests
// *************************************************
router.get("/users/", function(req, res, body) {
    var user = req.user;
    res.render('index', { user });
});
router.get("/users/about", function(req, res, body) {
    var user = req.user;
    res.render('about', { user });
});
router.get("/users/admin", function(req, res, body) {
    var user = req.user;
    res.render('admin.candidates', { user });
});
router.get("/users/adp", function(req, res, body) {
    var user = req.user;
    res.render('adp', { user });
});
router.get("/users/calendar", function(req, res, body) {
    var user = req.user;
    res.render('calendar', { user });
});
router.get("/users/email", function(req, res, body) {
    var user = req.user;
    res.render('email', { user });
});
router.get("/users/linkedin", function(req, res, body) {
    var user = req.user;
    res.render('linkedin', { user });
});
router.get("/users/salesforce", function(req, res, body) {
    var user = req.user;
    res.render('saleforce', { user });
});
router.get("/users/slack", function(req, res, body) {
    var user = req.user;
    res.render('slack', { user });
});
router.get("/users/team", function(req, res, body) {
    var user = req.user;
    res.render('team', { user });
});