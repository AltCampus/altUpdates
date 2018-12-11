const express = require("express");
const User = require('../controller/User.controller');
const Updates = require('../controller/Update.controller');
const passport = require('passport');
// const passport = require('./../modules/passport');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('index');
});

router.post('/signup', User.signup);

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  User.login
);

router.get('/whoami', User.whoAmI)


router.post('/update', Updates.addPost);


module.exports = router;