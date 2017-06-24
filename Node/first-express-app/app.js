var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", (req, res) => {
  res.send("Hi there!");
});

// "bye" => "Goodbye!"
app.get("/bye", (req, res) => {
  res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", (req, res) => {
  res.send("MEOW!");
});

// Tell Express to listen to requests (start server)
app.listen(3000, () => {
  console.log("Started server on port 3000");
});
