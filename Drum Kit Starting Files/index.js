let button = document.querySelectorAll(".drum");

button.forEach((button) => {
  button.addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        const crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;

      case "a":
        const kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();

      case "s":
        const snare = new Audio("./sounds/snare.mp3");
        snare.play();

      case "d":
        const tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();

      case "j":
        const tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();

      case "k":
        const tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();

      case "l":
        const tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();

      default:
        console.log(this.innerHTML);
        break;
    }
    // const sound = new Audio("./sounds/tom-1.mp3");
    // sound.play();
  });
});
