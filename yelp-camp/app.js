const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Campground = require("./models/campground");
const seedDB = require("./seeds")

const app = express();

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Campground.create({
//   name: "Misty Woods",
//   image: "https://images.unsplash.com/photo-1465695954255-a262b0f57b40?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=62070d9146c4c656b66d15f0a5c1fe8b",
//   description: "Good luck finding your way out!",
// }, (err, campground) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Newly created campground");
//     console.log(campground);
//   }
// });

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
      res.render("index", { campgrounds });
    }
  });
});

// CREATE -- add new campground to DB
app.post("/campgrounds", (req, res) => {
  // get data from form and add to campgrounds db
  let name = req.body.name;
  let image = req.body.image;
  let description = req.body.description;
  let newCampground = { name, image, description };
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
  res.render("new");
});

// SHOW - shows more information for one campground
app.get("/campgrounds/:id", (req, res) => {
  // find the campground with the provided ID
  Campground.findById(req.params.id, (err, foundCampground) => {
    if (err) {
      console.log(err);
    } else {
      // render show template with that campground
      res.render("show", { campground: foundCampground });
    }
  });
});

app.listen(3000, () => {
  console.log("The YelpCamp Server has started!");
});
