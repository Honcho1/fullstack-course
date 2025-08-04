let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let diceImage1 = `./images/dice${randomNumber1}.png`;

let player1dice = document.querySelector(".img1");
player1dice.setAttribute("src", diceImage1);
