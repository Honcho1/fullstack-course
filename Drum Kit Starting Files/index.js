let button = document.querySelectorAll(".drum");

button.forEach((button) => {
  button.addEventListener("click", function () {
    alert("I got clicked!");
  });
});
