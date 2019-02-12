var express = require('express');
var router = express.Router();
var db = require('./../models/user');

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	var user = req.user;
	res.render('index');
});

router.get('/about', ensureAuthenticated, function(req,res) {
	var user = req.user;
	var page = "About";
	res.render('about', {user});
});

router.get('/adp', ensureAuthenticated, function(req,res) {
	var user = req.user;
	var page = "ADP";
	res.render('adp', {user});
});

router.get('/bamboo', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('bamboo', {user});
});

router.get('/calendar', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('calendar', {user});
});

router.get('/email', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('email', {user});
});

router.get('/jobrole', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('jobrole', {user});
});

router.get('/linkedin', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('linkedin', {user});
});

router.get('/policies', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('policies', {user});
});

router.get('/slack', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('slack', {user});
});

router.get('/salesforce', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('salesforce', {user});
});

router.get('/talentpool', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('talentpool', {user});
});

router.get('/trilogy', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('trilogy', {user});
});

router.get('/team', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('team', {user});
});

router.get('/evolve', ensureAuthenticated, function(req,res) {
    var user = req.user;
    res.render('evolve', {user});
});

router.get('/additional', ensureAuthenticated, function(req,res) {
    var user = req.user;
    res.render('additional', {user});
});

router.get('/quiz', ensureAuthenticated, function(req,res) {
    var user = req.user;
    res.render('quiz', {user});
});

router.put('/submitTrilogy',ensureAuthenticated, function(req, res) {
	var userID = req.user._id;
	var progressBar = req.user.progress;
	var newProgress;
	var moduleN = req.body.name
	console.log(req.user.moduleN)
	if (req.user.moduleN === false) {
		newProgress = progressBar
	} else {
		newProgress = progressBar + 8.3;
	}
	
	console.log(progressBar);
	
	var newmoduleN = moduleN.replace(/^"(.*)"$/, '$1');
	console.log(newmoduleN)
	db.findOneAndUpdate({_id: userID}, {[newmoduleN]: true, progress: newProgress }, {new: true})
	.then(function(userC) {
		// If the User was updated successfully, send it back to the client
		res.json(userC);
		
		console.log(userC)
	  })
	  .catch(function(err) {
		// If an error occurs, send it back to the client
		res.json(err);
	  });
});


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;