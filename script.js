"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🤩 Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// DRY Functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const guessNumber = function (theNumberToGuess) {
  document.querySelector(".number").textContent = theNumberToGuess;
};
const theScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const bgColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const theWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

// event listener on the button to get the input of the guess when the player click on the "CHECK!" button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when no input
  if (!guess) {
    displayMessage("No Number!");

    // when player WIN
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    bgColor("#60b347");
    theWidth("30rem");
    guessNumber(secretNumber);

    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when player guess wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "You guess too high!" : "You guess too low!"
      );
      score--;
      theScore(score);
    } else {
      displayMessage("");
      guessNumber("GAME OVER");
      theScore(0);
      bgColor("red");
      theWidth("45rem");

      document.querySelector(".check").disabled = true;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  guessNumber("?");
  theScore(score);
  displayMessage("Start guessing...");
  bgColor("#222");
  theWidth("15rem");

  document.querySelector(".guess").value = "";
});
