const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
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

  res.render("campgrounds", { campgrounds });
});

app.listen(3000, () => {
  console.log("The YelpCamp Server has started!");
});
