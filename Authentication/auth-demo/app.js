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
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressSession({
  secret: "This is a secret",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/secret", (req, res) => {
  res.render("secret");
});

// Auth Routes

// show sign up form
app.get("/register", (req, res) => {
  res.render("register");
});

// handling user sign up
app.post("/register", (req, res) => {
  req.body.username
  req.body.password
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, () => {
      res.redirect("/secret");
    });
  });
});

// Login Routes
// render login form
app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(3000, () => {
  console.log("Server started!");
});
