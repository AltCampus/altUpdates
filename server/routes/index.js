const express = require("express");
const user = require('../controllers/user.controller');
const updates = require('../controllers/update.controller');
const passport = require('passport');
// const passport = require('./../modules/passport');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/users', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('index');
});



module.exports = router;