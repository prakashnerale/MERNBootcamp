
const User = require("../models/user"); // Using user model in auth controller file.
const { check, validationResult } = require('express-validator');
exports.signout = (req, res)=>{
    res.json({
        message: "user signout"
    });
};

exports.signup = (req, res)=>{

  const errors = validationResult(req);
  
  if (!errors.isEmpty()){
      return  res.status(422).json({
          error: errors.array()[0].msg,
          error: errors.array()[0].param
      })
  }
  
  
  const user = new User(req.body);
  user.save((err, user)=>{
      if(err){
          return res.status(400).json({
              err:"Not able to save in DB"
          })
      }
      res.json({
        name: user.name,
        email: user.email,
        id: user._id
      });
  });

};
     
    



/*exports.signup = (req, res)=>{
    console.log("REQ BODY", req.body);
    res.json({
        message: "Signup router Works!" 
    });
}; */