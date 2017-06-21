var todos = [];
var input = prompt("What would you like to do?");

function listTodo() {
  console.log("**********")
  todos.forEach(function (todo, index) {
    console.log(index + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added todo");
}

function deleteTodo() {
  var index = prompt("Enter index of todo to delete");
  todos.splice(index, 1);
  console.log("Deleted todo");
}

while (input !== "quit") {
  if (input === "list") {
    listTodo();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }

  input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");
