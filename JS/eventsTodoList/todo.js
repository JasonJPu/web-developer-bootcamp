var lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", () => {
    lis[i].classList.add("selected");
  });

  lis[i].addEventListener("mouseout", () => {
    lis[i].classList.remove("selected");
  });
  lis[i].addEventListener("click", () => {
    lis[i].classList.toggle("done");
  });
}
