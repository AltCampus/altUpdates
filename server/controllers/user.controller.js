const Updates = require('../models/Update');
const User = require('../models/User');

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
    
    
  },

  whoAmI: function(req, res) {    
    User.findOne({ _id: req.user._id }, { password: 0 }, function(err, user) {
      if(err) throw err;
      res.json({ user: user })
    });
  }


}
