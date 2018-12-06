const express = require("express");
const app = express();
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

const user = new mongoose.Schema({
	userName: String,
	password: String,
	fullName: String,
	email: String
})

// userUpdates schema

const userUpdates = new mongoose.Schema({
	tweetURL: String,
	codeChallengeURL:String,
	reflection: String,
	date: String
})



const User = mongoose.model('User', user);

// userUpdates model

const Updates = mongoose.model('Updates',userUpdates)

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

app.post('/add-post', (req,res) =>{
	console.log("post");
	const userUpdates = req.body;
	const newUpdates = new Updates(userUpdates);
	console.log(newUpdates);
	newUpdates.save((err,data) => {
		if(err){
			return res.json({
			 msg: 'Post not created'
			});
		}
			return res.json({
				msg: "Post created"
			});
		
	});
	console.log(req.body);
})


app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})