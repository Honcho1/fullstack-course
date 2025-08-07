let gamePattern = [];
gamePattern.push(randomChosenColor);

const buttonColors = ["red", "blue", "green", "yellow"];
const randomChosenColor = buttonColors[nextSequence()];

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

$(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
