const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var friends = ["Tony", "Justin", "Lily"];

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/addfriend", (req,res) => {
  let newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", (req, res) => {
  res.render("friends", { friends: friends });
});

app.listen(3000, () => {
  console.log("Server started!");
});
