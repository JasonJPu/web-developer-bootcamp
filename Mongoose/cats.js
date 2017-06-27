const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String,
});

const Cat = mongoose.model("Cat", catSchema);

// adding a new Cat into our database

// const george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil",
// });
//
// george.save((err, cat) => {
//   if (err) {
//     console.log("Something went wrong!");
//   } else {
//     console.log("We just saved a cat to the database");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Snow White",
  age: 15,
  temperatment: "Bland",
}, (err, cat) => {
  if (err) {
    console.log(err);
  } else {
    console.log(cat);
  }
});

// retrieve all cats from the database and console.log each one

Cat.find((err, cats) => {
  if (err) {
    console.log("An error occurred");
    console.log(err);
  } else {
    console.log("All the cats:");
    console.log(cats);
  }
});
