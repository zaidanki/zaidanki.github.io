var express = require('express');
var router = express.Router();

// getting my jsonFile
const { projects } = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  // using json file
  res.render('index', {projects});
});
// routing the about page
router.get('/about', function(req, res) {
  res.render('about');
});


module.exports = router;
