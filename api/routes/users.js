const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('You are so cool');
});

module.exports = router;
