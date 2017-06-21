var movies= [
  {
    name: Your Name,
    rating: 5,
    watched: true
  },
  {
    name: Interstellar,
    rating: 4.5,
    watched: true
  },
  {
    name: Wonder Woman,
    rating: 4,
    watched: false
  },
  {
    name: Baywatch,
    rating: 2,
    watched: false
  }
]

for (var i = 0; i < var.length; i++) {
  if (movies[i].watched === true) {
    console.log("You have watched \"" + movie[i].name + "\" - " + movie[i].rating + " stars");
  } else {
    console.log("You have not seen \"" + movie[i].name + "\" - " + movie[i].rating + " stars");
  }
}
