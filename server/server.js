const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expresSession = require('express-session');

const port = 8000;
// let cookieId = cuid();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// app.use(expresSession({
// 	key : cookieId,
// 	resave : false,
// 	cookie: {
// 		expires : 900000
// 	}
// }));

// app.use((req, res, next) => {
// 	if(req.cookies.cookieId && req.session){}
// })

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
	userId : String,
	allUpdates : [{
		tweetURL: String,
		codeChallenegeURL:String,
		reflection: String,
		date: String
	}]
})

const User = mongoose.model('User', user);

// userUpdates model

const Updates = mongoose.model('Updates',userUpdates)

app.get('/', (req, res) => {
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

	User.find({username : userCreds.username, password : userCreds.password}, (err, logedInData) => {
		if(err) return res.sendStatus(404)
		
		if(logedInData.length) {
			console.log(logedInData, "logged in data");
			// find the loggedin User also in Updates Collection
			Updates.find({_id : logedInData[0]._id}, (err, data) => {
				console.log(data, "find data");
				if(data.length) {
					return res.json(logedInData);
				} else {
					// If user is not found create a document for that user
					const newUpdate = new Updates({
						_id : logedInData[0]._id,
						allUpdates : []
					})
		
					newUpdate.save();

					return res.json(logedInData);
				}
			})
		
		} else {
			res.status(404).json({
				msg : "Please Sign Up. Account Not Available"
			})
		}
	})
	
})

app.post('/update', (req,res) =>{
	const userUpdates = req.body;
	const userId = userUpdates.userId;

	const updateObj = {
		tweetURL: userUpdates.tweetURL,
		codeChallenegeURL: userUpdates.codeChallenegeURL,
		reflection: userUpdates.reflection,
		date: userUpdates.date
	}

	console.log(updateObj)

	Updates.updateOne({_id : userId}, { $push : { allUpdates : updateObj}}, false, (err, data) => {
		Updates.find({_id : userId}, (err, data) => {
			res.json(data);
		})
	})
	
})


app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})