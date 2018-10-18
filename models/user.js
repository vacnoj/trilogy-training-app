var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	trilogy: {
		type: Boolean,
		default: false
		
	},
	adp: {
		type: Boolean,
		default: false
		
	},
	bamboo: {
		type: Boolean,
		default: false
		
	},
	calendar: {
		type: Boolean,
		default: false
		
	},
	linkedin: {
		type: Boolean,
		default: false
		
	},
	slack: {
		type: Boolean,
		default: false
		
	},
	salesforce: {
		type: Boolean,
		default: false
		
	},
	team: {
		type: Boolean,
		default: false
		
	},
	mail: {
		type: Boolean,
		default: false
		
	},
	policies: {
		type: Boolean,
		default: false
		
	},
	talentpool: {
		type: Boolean,
		default: false
		
	},
	evolve: {
		type: Boolean,
		default: false
		
	},
	progress: {
		type: Number,
		default: 0
		
	}	
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}