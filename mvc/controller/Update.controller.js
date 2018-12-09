const Updates = require("../model/Update");

module.exports = {
  addPost : (req,res) =>{
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
    
  }
}