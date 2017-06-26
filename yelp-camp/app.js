const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
  {
    name: "Salmon Creek",
    image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
  },
  {
    name: "Granite Hill",
    image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg",
  },
  {
    name: "Mountain Goat's Rest",
    image: "https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds });
});

app.post("/campgrounds", (req, res) => {
  let name = req.body.name;
  let image = req.body.image;
  let newCampground = { name, image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.listen(3000, () => {
  console.log("The YelpCamp Server has started!");
});
