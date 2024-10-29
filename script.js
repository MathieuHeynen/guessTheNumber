'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🤩 Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// event listener on the button to get the input of the guess when the player click on the "CHECK!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    // when player WIN
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when player guess too High
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'You guess too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '';
      document.querySelector('.number').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '45rem';
    }

    // when player guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'You guess too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '';
      document.querySelector('.number').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '45rem';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
});
