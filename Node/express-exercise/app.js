const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there, welcome to my ssignment!");
});

const sound = {
  pig: "Oink",
  cow: "Moo",
  dog: "Woof Woof!",
  cat: "Meow",
  sheep: "Baaaaa",
};

app.get("/speak/:animal", (req, res) => {
  const animal = req.params.animal.toLowerCase();
  if (sound[animal]) {
    res.send("The " + animal + " says '" + sound[animal] + "'");
  } else {
    console.log(sound[animal]);
    console.log(animal);
    res.send("Sorry, page not found...What are you doing with your life?");
  }
});

app.get("/repeat/:message/:num", (req, res) => {
  const message = req.params.message;
  const num = Number(req.params.num);
  let result = "";
  for (let i = 0; i < num; i++) {
    result += message + " ";
  }
  res.send(result);
});

app.get("*", (req, res) => {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
