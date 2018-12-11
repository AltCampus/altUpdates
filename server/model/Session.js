const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    userId:{ type : mongoose.Schema.Types.ObjectId},
    sessionId : String 
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;