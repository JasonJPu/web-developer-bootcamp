var express = require("express"),
  bodyParser = require("body-parser"),
  express = require("express"),
  app = express();

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var blogSchema = 

app.listen(3000, () => {
  console.log("Server is running!");
});
