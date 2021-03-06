require('dotenv').config();

var express = require('express');
var router = express.Router();
var passport = require('passport');

// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('twitter'),  function (req, res) {
  res.redirect('/');
});

router.get('/twitter',
  passport.authenticate('twitter', { failureRedirect: '/auth/login' }));

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/twitter/callback', function (req, res, next) {
  passport.authenticate('twitter', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/auth/login'); }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      res.redirect('/users');
    });
  })(req, res, next);
});

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;