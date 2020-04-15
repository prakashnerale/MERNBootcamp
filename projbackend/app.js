require("dotenv").config();

const mongoose = require("mongoose");

const express = require("express");
const app = express();
const bodyParser = require("body-Parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");

//Middleware
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());

//DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(
    console.log("DB Got Some Issue")
)

//My Routes
app.use("/api", authRoutes);


//port
 const port =process.env.PORT || 8000;

 //Starting as server
 app.listen(port, ()=>{
     console.log(`app is running at ${port}`);
 })