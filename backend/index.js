const express = require('express')
const cors = require('cors');
const User = require('./database/user');
require("dotenv").config;
const mongoose = require("mongoose");
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

app.use(cors());
app.use(express.json());


app.post('/user', async function (req, res) {
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    const user = await User.findOne({email:req.body.email})
    if(user){
      res.send("Account already Exists");
    }else{
    const pass = await bcrypt.hash(req.body.password, 10)
    req.body.password = pass;
    const newUser = await User.create(req.body)
    console.log(newUser)
    res.send("User Created")
  }
  }catch(e){
    console.log(e)
  }
})

app.post('/reset',async function(req,res){
  const email = req.body.email;
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    const user = await User.findOne({email:email})
    if(user) res.send(user.email);
    else {
      res.status(404);
      res.send("No user found");
    }
  }catch(e){
    console.log(e)
  }
})

app.post('/login', async function (req,res){
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    const user = await User.findOne({email:req.body.email})
    if(user){
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(result){
          const token = jwt.sign(req.body.email, process.env.ACCESS_SECRET);
          res.status(200);
          res.send({jwt:token});
        }else{
          res.status(401);
          res.send("Invalid Credentials");
        }
    });
    }else{
      res.status(404);
    res.send("No User Found");
  }
  }catch(e){
    console.log(e)
  }
})




app.listen(5500)