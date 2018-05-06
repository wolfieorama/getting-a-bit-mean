const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const User = require("../models/user");

// register
router.post("/register", (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if (err){
      res.json({ success: false, msg: "Failed to register" });
    }else{
      res.json({ success: true, msg: "Successfully registered" });
    }
  });
});

// authenticate
router.post("/authenticate", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({ success: false, msg: "User not found"});
    }

    User.comparedPassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 //1 week
        });

        res.json({
          success: true,
          token: "JWT "+token,
          user:{
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      }else{
        return res.json({ success: false, msg: "Wrong password"});
      }
    });
  });
});

// register
router.get("/profile", (req, res) => {
  res.send("profile page");
});
module.exports = router;
