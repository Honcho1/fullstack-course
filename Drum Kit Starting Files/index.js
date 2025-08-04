let button = document.querySelectorAll(".drum");

button.forEach((button) => {
  button.addEventListener("click", function () {
    this.style.color = "white";
    // const sound = new Audio("./sounds/tom-1.mp3");
    // sound.play();
  });
});
