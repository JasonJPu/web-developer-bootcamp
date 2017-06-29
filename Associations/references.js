const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

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
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});
const User = mongoose.model("User", userSchema);

// User.create({
//   email: "Bob@gmail.com",
//   name: "Bob Jones",
// });

// Post.create({
//   title: "How to cook the best burger pt. 3",
//   content: "Alijelijgasligjsleig",
// }, (err, post) => {
//   User.findOne({ email: "Bob@gmail.com" }, (err, foundUser) => {
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save((err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   });
// });

// Find user
// Find all posts for that user
