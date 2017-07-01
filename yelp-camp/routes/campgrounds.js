const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");

// INDEX - show all campgrounds
router.get("/", (req, res) => {
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
router.post("/", (req, res) => {
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
router.get("/new", (req, res) => {
  res.render("campgrounds/new");
});

// SHOW - shows more information for one campground
router.get("/:id", (req, res) => {
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

module.exports = router;
