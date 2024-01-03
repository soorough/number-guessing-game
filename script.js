'use strict';
// I need a random no
// I need to select the input when the button is clicked
// I need 2 variables for score and highscore
// I can apply binary search logic
// update the score
// update the css
// need reset functionality

document.querySelector('.again').addEventListener('click', function () {
  console.log('reset sucessfull!');
  num = Math.trunc(Math.random() * 100) + 1;
  score = 5;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '5';

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
let num = Math.trunc(Math.random() * 100) + 1;
let highScore = 0;
let score = 5;

document.querySelector('.check').addEventListener('click', function () {
  let gNum = Number(document.querySelector('.guess').value);
  console.log(gNum);
  if (!gNum) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (num === gNum) {
    document.querySelector('.number').textContent = num;
    document.querySelector('.message').textContent = "🎊 You're correct";
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    highScore = Math.max(highScore, score);
    document.querySelector('.highscore').textContent = highScore;
  } else if (num !== gNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        gNum > num ? '📈 too high!' : '📉 too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent = '💩 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
