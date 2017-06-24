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

app.get("/r/:subredditName", (req, res) => {
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit + " subreddit!");
})

app.get("/r/:subredditName/comments/:id/:title/", (req, res) => {
  res.send("Welcome to the comments page!");
})

// Catch all, but order of routes matters
app.get("*", (req, res) => {
  res.send("You are a star!");
});

// Tell Express to listen to requests (start server)
app.listen(3000, () => {
  console.log("Started server on port 3000");
});
