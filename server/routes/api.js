const express = require("express");
const user = require('../controllers/user.controller');
const update = require('../controllers/update.controller');
const passport = require('passport');
const auth = require('../modules/auth');

var router = express.Router();

router.post('/signup', user.signup);

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }), 
  function(req, res) {
    return res.json({ user: req.user })
  }
);

router.get('/me', auth.isLoggedIn, user.whoAmI);

router.post('/update', auth.isLoggedIn, update.addUpdate);

router.get('/user/:id/updates', update.fetchAllUpdates);

module.exports = router;