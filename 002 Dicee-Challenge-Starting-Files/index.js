let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let diceImage1 = `./images/dice${randomNumber1}.png`;
let player1dice = document.querySelector(".img1");
player1dice.setAttribute("src", diceImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let diceImage2 = `./images/dice${randomNumber2}.png`;
let player2dice = document.querySelector(".img2");
player2dice.setAttribute("src", diceImage2);

const resultText = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  resultText.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  resultText.textContent = "Player 2 Wins! 🚩";
} else {
  resultText.textContent = "Draw!";
}
