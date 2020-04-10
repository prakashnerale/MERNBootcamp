const express = require("express");

const app = express();

const port = 8000;
app.get("/", (req,res) => {
   return res.send("Home Page")})

app.get("/signup", (req,res) => {
   return res.send("SignUp Page")})

app.get("/Signin", (req,res) => {
    return res.send("SignIn Page")})

app.get("/SignOut", (req,res) => {
    return res.send("SignOut Page")})



app.listen(port, () => 
   console.log("Server is up and Running..."))





//const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)