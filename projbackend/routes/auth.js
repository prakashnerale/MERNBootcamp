var express = require('express') //importing router from express library
var router = express.Router()
const { check, validationResult } = require('express-validator');
const {signout, signup} = require("../controllers/authController");//controller(taking the controller file auth.js from the folder)


router.post("/signup",[
    check("name", "name should be at least 3 char").isLength({min: 3}),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be more than 3 Char").isLength({min: 3}),

], signup); // adding data to the database,post method is used for adding.

router.get("/signout", signout ); //Taking data from database,Get method is used. 

module.exports = router; 