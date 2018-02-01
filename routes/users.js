const express = require('express');
const router = express.Router();


// register
router.get('/register', (req, res, next) => {
  res.send("register page");
});

// authenticate
router.get('/authenticate', (req, res, next) => {
  res.send("authenticate page");
});

// register
router.get('/profile', (req, res, next) => {
  res.send("profile page");
});

// validate route
router.get('/validate', (req, res, next) => {
  res.send("validate page");
});

module.exports = router;
