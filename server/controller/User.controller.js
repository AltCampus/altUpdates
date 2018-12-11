const Updates = require('../model/Update');
const User = require('../model/User');
const Session = require('./../model/Session');
const session = require('express-session')

module.exports  = {

  signup : (req, res) => {
    const userData = req.body;
    const newUser = new User(userData);
    console.log("sign up completed");	
    
    User.find({username : userData.username}, (err, data) => {
      if(data.length) {
        res.writeHead(200, {"Content-TypUpdates.controller.addPoste": "application/json"});
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
  },

  login: (req, res) => {
    console.log("called")
    const userCreds = req.body;
    User.find({username : userCreds.username, password : userCreds.password}, (err, logedInData) => {
      if(err) return res.sendStatus(404)
      
      if(logedInData.length) {
        console.log(logedInData, "logged in data");
        Updates.find({userId : logedInData[0]._id}, (err, data) => {
          console.log(data, "find data");
          if(data.length) {
            return res.json(logedInData);
          } else {
            
            const newUpdate = new Updates({
              userId : logedInData[0]._id,
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
    
  },

  whoAmI: function(req, res) {
    console.log(req.user);
    
    User.findById(req.user._id, function(err, user) {
      if(err) throw err;
      if(!user) return res.status(400).send({ message: "No user found." })      
      res.json({ user: user })
    });
  }


}
