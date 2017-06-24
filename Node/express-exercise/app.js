const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there, welcome to my ssignment!");
});

app.get("/speak/:animal", (req, res) => {
  const animal = req.params.animal;
  if (animal === "pig") {
    res.send("The pig says 'Oink'");
  } else if (animal === "cow") {
    res.send("The cow says 'Moo'");
  } else if (animal === "dog") {
    res.send("The dog says 'Woof Woof!'");
  } else {
    res.send("Sorry, page not found...What are you doing with your life?");
  }
});

app.get("/repeat/hello/:num", (req, res) => {
  const num = req.params.num;
  if (num === "3") {
    res.send("hello hello hello");
  } else if (num === "5") {
    res.send("hello hello hello hello hello");
  } else {
    res.send("Sorry, page not found...What are you doing with your life?");
  }
});

app.get("/repeat/blah/2", (req, res) => {
  res.send("blah blah");
});

app.get("*", (req, res) => {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
