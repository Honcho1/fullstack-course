const buttoncolors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttoncolors[randomNumber];

  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);

  return randomChosenColor;
}

function playSound(color) {
  const sound = new Audio(`./sounds/${color}.mp3`);
  sound.play();
}

$(".btn").on("click", function () {
  const userChosenColor = $(this).attr("id");
});
