const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const localStrategy = require("passport-local");
const passpostLocalMongoose = require("passport-local-mongoose");
const expressSession = require("express-session");
const User = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo");

const app = express();
app.set("view engine", "ejs");

app.use(expressSession({
  secret: "This is a secret",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/secret", (req, res) => {
  res.render("secret");
});

app.listen(3000, () => {
  console.log("Server started!");
});
