const express = require("express");
const request = require("request");

const app = express();

app.set("view engine", "ejs");

app.get("/results", (req, res) => {
  const query = req.query.search;
  const url = `http://www.omdbapi.com/?apikey=thewdb&s=${query}`;
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.render("results", { data });
    }
  });
});

app.get("/", (req, res) => {
  res.render("search");
});

app.listen(3000, () => {
  console.log("Server has started!");
});
