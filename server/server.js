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
	username: String,
	password: String,
	fullName: String,
	email: String
})

// userUpdates schema

const userUpdates = new mongoose.Schema({
	tweetURL: String,
	codeChallenegeURL:String,
	reflection: String,
	date: String
})



const User = mongoose.model('User', user);

// userUpdates model

const Updates = mongoose.model('Updates',userUpdates)

app.get('/', (req, res) => {
	// User.find({username : 'ertyuio'}, (err, data) => {
	// 	if(err) return res.sendStatus(404);

	// 	console.log(data)
	// })
	res.send("You are connected to Praveen");
})

app.post('/signup', (req, res) => {
	const userData = req.body;
	const newUser = new User(userData);
	console.log("sign up completed");	
	
	User.find({username : userData.username}, (err, data) => {
		if(data.length) {
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify({
				msg : "username is available"
			}));
		} else {
			newUser.save((err, data) => {
				if(err) {
					res.json({
						msg : "Input Valid Credentials"
					})
				} else {
					res.json({
						responseStatus : "200",
						msg : "Signup Successfully"
					})
				}
			})
		}
	});
})

app.post('/login', (req, res) => {
	const userCreds = req.body;

	User.find({username : userCreds.username, password : userCreds.password}, (err, data) => {
		if(err) return res.sendStatus(404)
		console.log(data)
		if(data.length) {
			res.json(data);
		} else {
			res.status(404).json({
				msg : "Please Sign Up. Account Not Available"
			})
		}
	})

})

app.post('/add-post', (req,res) =>{
	const userUpdates = req.body;
	const newUpdates = new Updates(userUpdates);
	console.log(newUpdates);
	newUpdates.save((err,data) => {
		if(err){
			return res.json({
			 msg: 'Post not created'
			});
		}
		Updates.find({}, (err, data) => {
			res.json(data);
		})
	});
	console.log(req.body);
})


app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})