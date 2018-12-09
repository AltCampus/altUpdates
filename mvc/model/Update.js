const mongoose = require('mongoose');


const updateSchema = new mongoose.Schema({
	userId : String,
	allUpdates : [{
		tweetURL: String,
		codeChallenegeURL:String,
		reflection: String,
		date: String
	}]
});

const Updates = mongoose.model('Updates',updateSchema)

module.exports = Updates;