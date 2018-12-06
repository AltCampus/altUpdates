const express = require("express");
const app = express();
const mongoose = require('mongoose');

const port = 8000;

mongoose.connect('mongodb://localhost/altUpdates',{ useNewUrlParser: true },  function(err, connection) {
  if(err) throw err
  else console.log('Connected to mongodb')
});

const user = new mongoose.Schema({
    userName: String,
    password: String,
    fullName: String,
    email: String
})

const User = mongoose.model('User', user);

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Server is running on https://localhost: ${port}`)
})