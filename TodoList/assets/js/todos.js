// Check off specific todos by clicking
$("ul").on("click", "li", (event) => {
  $(event.currentTarget).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", (event) => {
  event.stopPropagation();
  $(event.currentTarget).parent().fadeOut(500, () => {
    $event.currentTarget.remove();
  });
});

// Add new todo
$("input[type='text']").on("keypress", (event) => {
  if (event.which === 13) {
    let input = $(event.currentTarget).val();
    $(event.currentTarget).val("");
    $("ul").append("<li><span><i class='fa fa-trash'<i></i></span> " + input + "</li>");
  }
});
