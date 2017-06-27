const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Schema setup

const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//   name: "Granite Hill",
//   image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg",
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

app.get("/campgrounds", (req, res) => {
  // Get all campgrounds from db
  Campground.find({}, (err, campgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", { campgrounds });
    }
  });
});

app.post("/campgrounds", (req, res) => {
  // get data from form and add to campgrounds db
  let name = req.body.name;
  let image = req.body.image;
  let newCampground = { name, image };
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

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.listen(3000, () => {
  console.log("The YelpCamp Server has started!");
});
