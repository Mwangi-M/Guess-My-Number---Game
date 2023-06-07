'use strict';

//The first part, document.querySelector('message'), selects the element and the result of this query
//Selector method is gonna be an element. From this element, we can read the textContent Property that's
//why we use another dot, .textContent.

console.log(document.querySelector('.message').textContent);

//DOM - Stands for Document Object Model:
//This is a Structured Representation of HTML documents. It allows Javascript to access HTML elements
//and styles to manipulate them (Change text, HTML attributes, and even CSS styles).

// N/B:- DOM !== JAVASCRIPT
//- DOM Methods and properties for DOM Manipulation is not part of Javascript. Instead it's part of the
//  Web API's (Application Programming Interface). Web API's are like libraries that browsers implement and
//  we can access from our Javasript code.

//- There is an official DOM specification that Browsers implement which is the reasom why DOM manipulation
//  works the same in all browsers.

//document.querySelector('.message').textContent = '🎉 Correct Number!';

//DOM Manipulation for the Secret Number
//document.querySelector('.number').textContent = 30;

//DOM Manipulation for the Secret Number
//document.querySelector('.score').textContent = 10;

//To get the actual value for a input field, we use the value property and we can also use it to manipulate
//this element such as settig a value.
//document.querySelector('.guess').value = 25;

//To get the Number from the input field and log it to the console whenever we click on the button
// - 'Check!', we use the addEventListener

/**Implementing How the Game Works. Implement what happens when:
 * 1. The Game is correct, that is, when it's equal to the secret number.
 * 2. The guess is too low.
 * 3. The guess is too high.
 *
 *  N/B:- To start we need to define the Secret Number.
 *
 */

//Defining the Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    //Checking if there is No guess
    displayMessage('⛔  No Number!'); //document.querySelector('.message').textContent = '⛔  No Number!';
  } else if (guess === secretNumber) {
    //Checks when the player wins
    displayMessage(`🥇 You've Won the game!`); //document.querySelector('.message').textContent = `🥇 You've Won the game!`;
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    //Checks when the guess is Too High or Too Low
    if (score > 1) {
      displayMessage(guess > secretNumber ? '❌ Too High!' : '❌ Too Low!'); //document.querySelector('.message').textContent = '❌ Too High!';
      score--; //score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You Lost the Game!'); //document.querySelector('.message').textContent = '💣 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  /**
  else if (guess > secretNumber) {
    //Checks when the guess is Too High
    if (score > 1) {
      displayMessage('❌ Too High!'); //document.querySelector('.message').textContent = '❌ Too High!';
      score--; //score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You Lost the Game!'); //document.querySelector('.message').textContent = '💣 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //Checks when the guess is Too Low
    if (score > 1) {
      displayMessage('❌ Too Low!'); //document.querySelector('.message').textContent = '❌ Too Low!';
      score--; //score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You Lost the Game!'); //document.querySelector('.message').textContent = '💣 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } 
   */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...'); //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
