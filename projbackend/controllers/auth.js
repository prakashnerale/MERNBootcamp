
const User = require("../models/user"); // Using user model in auth controller file.

exports.signout = (req, res)=>{
    res.json({
        message: "user signout"
    });
};

exports.signup = (req, res)=>{
  const user = new User(req.body);
  user.save((err, user)=>{
      if(err){
          return res.status(400).json({
              err:"Not able to save in DB"
          })
      }
      res.json(user);
  });

};
     
    



/*exports.signup = (req, res)=>{
    console.log("REQ BODY", req.body);
    res.json({
        message: "Signup router Works!" 
    });
}; */