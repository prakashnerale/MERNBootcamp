var express = require('express') //importing router from express library
var router = express.Router()
 
const {signout} = require("../controllers/auth");//controller(taking the controller file auth.js from the folder)


router.get("/signout", signout );

module.exports = router; 