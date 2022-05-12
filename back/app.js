const express = require('express')
const app = express()

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


const authRoutes = require('./routes/auth')
const blogRoutes = require('./routes/blog')
app.use('/api',authRoutes)
app.use('/api',blogRoutes)

const mongo = require('./utils/database')

app.listen(3000, (err)=>{
    if(!err){
        console.log("Port is listening...");
    }
})