const express = require("express");
const User = require('../controller/User.controller');
const Updates = require('../controller/Update.controller');


var router = express.Router();

router.get('/', (req, res) => {
  // User.find({username : 'ertyuio'}, (err, data) => {
  // 	if(err) return res.sendStatus(404);

  // 	console.log(data)
  // })
  res.send("You are connected to Praveen");
});

router.post('/signup', User.signup);

router.post('/login', User.login);

router.post('/add-post', Updates.addPost);


module.exports = router;