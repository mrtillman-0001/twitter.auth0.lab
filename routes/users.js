var express = require('express');
const isAutenticated = require('../isAutenticated');
var router = express.Router();

/* GET users listing. */
router.get('/', isAutenticated, function(req, res, next) {
  res.json(req.user);
});

module.exports = router;
