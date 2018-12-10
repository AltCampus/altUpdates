const express = require("express");
const User = require('../controller/User.controller');
const Updates = require('../controller/Update.controller');


var router = express.Router();

router.get('/', (req, res) => {
 
  res.send("runnin on localhost 8000");
});

router.post('/signup', User.signup);

router.post('/login', User.login);

router.post('/update', Updates.addPost);


module.exports = router;