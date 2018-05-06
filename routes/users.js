const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
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
router.get("/authenticate", (req, res) => {
  res.send("authenticate page");
});

// register
router.get("/profile", (req, res) => {
  res.send("profile page");
});
module.exports = router;
