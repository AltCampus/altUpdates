const Updates = require("../models/Update");
const User = require("../models/User");

module.exports = {
  addUpdate : (req,res) => {
    const userUpdates = req.body;

    const updateObj = {
      tweetURL: userUpdates.tweetURL,
      codeChallenegeURL: userUpdates.codeChallenegeURL,
      reflection: userUpdates.reflection,
      date: new Date()
    }

    if(!userUpdates.tweetURL || !userUpdates.codeChallenegeURL || !userUpdates.reflection) {
      return res.status(400).send({ message: 'Please enter all fields' });
    }
  
    console.log(updateObj, req.user._id)
  
    Updates.findOneAndUpdate({ userId: req.user._id }, { $push : { allUpdates : updateObj}}, { upsert: true }, (err, data) => {
      console.log(err, data, 'debug 2');
      Updates.find({ userId: req.user._id }, (err, data) => {
        res.json(data);
      })
    })
  },

  fetchAllUpdates: (req, res) => {
    var userId = req.params.id;
    
    User.findById(userId, function(err, user) {
      if(!user) {
        return res.status(404).send({message: 'User not found.'})
      }

      Updates.findOne({ userId: userId }, function(err, allUpdates) {
        if(err) throw err;
        res.json({ updates: allUpdates });
      });
    });
  }
}