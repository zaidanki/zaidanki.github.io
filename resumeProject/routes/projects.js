var express = require('express');
var router = express.Router();

// getting the json file
const { projects } = require('../data.json');

router.get('/', function(req, res) {
  // redirecting to about if someone goes to /projects
  res.redirect('/about')
});

// using project, getting id to make multiple pages depending on which img is clicked on.
router.get('/:id', function(req, res) {
  const {id} = req.params;
  const proj = projects[id];
  const projectRender = {id, proj};
  res.render(`project`, projectRender)

    });

module.exports = router;
