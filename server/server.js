const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 8000;

// Middlewares
app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://localhost/altUpdates',{ useNewUrlParser: true },  function(err, connection) {
  if(err) throw err
  else console.log('Connected to mongodb');
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

app.post('/signup', (req, res) => {
	const userData = req.body;
	const newUser = new User(userData);

	newUser.save((err, data) => {
		if(err) {
			return res.json({
        msg : "Input Valid Credentials"
			})
		}
		res.json({
			msg : "SignUp Successfull"
		});
	});	
    
	console.log(req.body);
	res.send(req.body);
})

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})