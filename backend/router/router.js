const express = require("express");
const User = require('../controller/User.controller');
const Updates = require('../controller/Update.controller');
const passport = require('passport');
// const passport = require('./../modules/passport');

var router = express.Router();

router.get('/', (req, res) => {
  res.send('server is running on 8001')
});

router.post('/signup', User.signup);

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  User.login
);


router.post('/update', Updates.addPost);


module.exports = router;