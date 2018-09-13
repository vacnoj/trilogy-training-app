var express = require ("express");
var router = express.Router();

/*Get Home Page*/
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Trilogy Recruitment', condition: false, anyArray: [1,2,3]});

});

module.exports = router;