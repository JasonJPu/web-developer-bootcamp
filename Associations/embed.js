const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Post = mongoose.model("Post", postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema],
});
const User = mongoose.model("User", userSchema);

// const newUser = new User({
//   email: "harry@hogwarts.edu",
//   name: "Harry Potter",
// });
//
// newUser.posts.push({
//   title: "How to brew polyjuice potions",
//   content: "Just kidding, go to potions class to learn it!"
// })
//
// newUser.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// const newPost = new Post({
//   title: "Reflection on Apples",
//   content: "They are delicious",
// })
// newPost.save((err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({name: "Harry Potter"}, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: "3 Things I Really Hate",
      content: "Voldemort, Voldemort, Voldemort",
    });
    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    })
  }
});
