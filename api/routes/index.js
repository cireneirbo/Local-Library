const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog/'); // redirects the home page to catalog index
});

module.exports = router;
