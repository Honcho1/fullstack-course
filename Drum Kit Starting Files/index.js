let button = document.querySelectorAll("button");

button.forEach((button) => {
  button.addEventListener("click", function () {
    alert("I got clicked!");
  });
});
