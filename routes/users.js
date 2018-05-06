const express = require("express");
const router = express.Router();


// register
router.post("/register", (req, res) => {
  res.send("register page");
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
