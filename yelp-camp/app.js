const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const Campground = require("./models/campground");
const Comment = require("./models/comment");
const seedDB = require("./seeds");

const app = express();

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
seedDB();

// Passport configuration
app.use(require("express-session")({
  secret: "It's a secret!",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", (req, res) => {
  // Get all campgrounds from db
  Campground.find({}, (err, campgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", { campgrounds });
    }
  });
});

// CREATE -- add new campground to DB
app.post("/campgrounds", (req, res) => {
  // get data from form and add to campgrounds db
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  const newCampground = { name, image, description };
  // create a new campground and save to db
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      // redirect to campgrounds page
      res.redirect("/campgrounds");
    }
  });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

// SHOW - shows more information for one campground
app.get("/campgrounds/:id", (req, res) => {
  // find the campground with the provided ID
  Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
    if (err) {
      console.log(err);
    } else {
      // render show template with that campground
      res.render("campgrounds/show", { campground: foundCampground });
    }
  });
});

// ===============
// COMMENTS ROUTES
// ===============

app.get("/campgrounds/:id/comments/new", (req, res) => {
  Campground.findById(req.params.id, (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      res.render("comments/new", { campground });
    }
  })
});

app.post("/campgrounds/:id/comments", (req, res) => {
  // lookup campground using ID
  Campground.findById(req.params.id, (err, campground) => {
    if (err) {
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      // create new comments
      Comment.create(req.body.comment, (err, comment) => {
        if (err) {
          console.log(err);
        } else {
          // connect new comment to campground
          campground.comments.push(comment);
          campground.save();
          // redirect campground show page
          res.redirect(`/campgrounds/${campground._id}`);
        }
      })
    }
  });
});

// AUTH ROUTES
// show register form
app.get("/register", (req, res) => {
  res.render("register");
});

// sign up logic
app.post("/register", (req, res) => {
  const newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, () => {
      res.redirect("/campgrounds");
    });
  });
});

// show login page
app.get("/login", (req, res) => {
  res.render("login");
});

// handle login logic
app.post("/login", passport.authenticate("local", {
  successRedirect: "/campgrounds",
  failureRedirect: "/login",
}), (req, res) => {
});

app.listen(3000, () => {
  console.log("The YelpCamp Server has started!");
});
