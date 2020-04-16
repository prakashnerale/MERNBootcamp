var express = require('express') //importing router from express library
var router = express.Router()
 
const {signout, signup} = require("../controllers/auth");//controller(taking the controller file auth.js from the folder)


router.post("/signup", signup) // adding data to the database,post method is used for adding.

router.get("/signout", signout ); //Taking data from database,Get method is used. 

module.exports = router; 