const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const updateSchema = new mongoose.Schema({
	userId : {type : ObjectId, ref : 'User'},
	allUpdates : [{
		tweetURL: String,
		codeChallenegeURL:String,
		reflection: String,
		date: {type : Date}
	}]
});

// console.log(updateSchema)

const Updates = mongoose.model('Updates',updateSchema)

module.exports = Updates;