const buttoncolors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;

$(document).keypress(function () {
  if (!gameStarted) {
    gameStarted = true;
    level = 0;
    $("level-title").text(`Level ${level}`);
    nextSequence();
  }
});

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttoncolors[randomNumber];

  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  return randomChosenColor;
}

function playSound(name) {
  const sound = new Audio(`./sounds/${name}.mp3`);
  sound.play();
}

$(".btn").on("click", function () {
  const userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  console.log("User sequence: ", userClickedPattern);
});

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}
