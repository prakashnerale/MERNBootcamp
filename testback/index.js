const express = require("express");

const app = express();

const port = 8000;
app.get("/", (req,res) => {
   return res.send("Home Page")});

const admin =  (req,res) => {
   return res.send("This is Admin DashBoard")};

const isAdmin = (req, res, next) =>{
   console.log("isAdmin is running");
   next();
   }

const isloggedIn = (req, res, next) =>{
   console.log("isloggedIn is running and user is loggedIn");
   next();
   }

 app.get("/admin", isAdmin, isloggedIn, admin);//here isAdmin is middle ware which should define before.

 

 app.listen(port, () => 
   console.log("Server is up and Running..."))





//const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)