const express = require("express");
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const port = 8001;

mongoose.connect('mongodb://localhost/altUpdates',{ useNewUrlParser: true },  function(err, connection) {
  if(err) throw err
  else console.log('Connected to mongodb');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))
// app.use(cookieParser());

app.use(session({
  secret: 'altUpdates secret',
  resave: false,
  saveUninitialized :false,
  cookie : {
    maxAge : 900000
  }
}));

app.use(passport.initialize());
app.use(passport.session());
require('./modules/passport')(passport)
app.use(cors());

app.use(require('./router/router'));

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})