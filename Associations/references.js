const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

const Post = require("./models/post")
const User = require("./models/user")

// User.create({
//   email: "Bob@gmail.com",
//   name: "Bob Jones",
// });

Post.create({
  title: "How to cook the best burger pt. 4",
  content: "Gibberish",
}, (err, post) => {
  User.findOne({ email: "Bob@gmail.com" }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      foundUser.posts.push(post);
      foundUser.save((err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
});

// Find user
// User.findOne({ email: "Bob@gmail.com" }).populate("posts").exec((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// Find all posts for that user
