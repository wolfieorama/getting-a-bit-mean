const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

// connecting Mongo
mongoose.connect(config.database);

//test db connection
mongoose.connection.on("connected", () => {
  console.log("connected to Mongo DB: " + config.database);
});

mongoose.connection.on("error", (err) => {
  console.log("DB not connected coz of : " + err);
});

const app = express();
const users = require("./routes/users");

//port
const port = 3000;

//cors
app.use(cors());

//bodyParser
app.use(bodyParser.json());

//setting static folder for client files
app.use(express.static(path.join(__dirname, "client")));

// for users route
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.listen(port, () => {
  console.log("Server started on port "+port);
});
