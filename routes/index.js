var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	var user = req.user;
	res.render('index');
});

router.get('/about', ensureAuthenticated, function(req,res) {
	var user = req.user;
	res.render('about', {user});
});

router.get('/adp', ensureAuthenticated, function(req,res) {
	var user = req.user;
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

router.get('/quiz', ensureAuthenticated, function(req,res) {
    var user = req.user;
    res.render('quiz', {user});
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