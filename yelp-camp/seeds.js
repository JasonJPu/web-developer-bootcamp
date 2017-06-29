const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");

const data = [
  {
    name: "Misty Woods",
    image: "https://images.unsplash.com/photo-1465695954255-a262b0f57b40?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=62070d9146c4c656b66d15f0a5c1fe8b",
    description: "Good luck finding your way out!",
  },
  {
    name: "High Sierra",
    image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=581792eb6ba67c54020fa30eaeb0d5cc",
    description: "Higher than Sierra!",
  },
  {
    name: "Henesys Valley",
    image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92049097861cf4bab56e26749588b58e",
    description: "Lots of mushrooms!",
  },
];

function seedDB() {
  // Remove all campgrounds
  Campground.remove({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("removed campgrounds!");

      // Add a few campgrounds
      data.forEach((seed) => {
        Campground.create(seed, (err, campground) => {
          if (err) {
            console.log(err)
          } else {
            console.log("Added a campground!");
            Comment.create(
              {
                text: "This place is great, but I wish there was internet.",
                author: "Homer",
              }, (err, comment) => {
                if (err) {
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment")
                }
            });
          }
        });
      });

    }
  });
}

module.exports = seedDB;
