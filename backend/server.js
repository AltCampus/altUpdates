const express = require("express");
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const port = 8000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/altUpdates',{ useNewUrlParser: true },  function(err, connection) {
  if(err) throw err
  else console.log('Connected to mongodb');
});

app.use(require('./router/router') , (req,res,next) => {
  next();
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})