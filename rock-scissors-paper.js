console.info(`Rock paper scissors, let's get ready to rumble!!!`);

const args = process.argv.slice(2);

let playerHand = args[0];
let compHand;

const shapes = ['rock', 'scissors', 'paper'];
// playerHand = shapes[Math.floor(Math.random() * shapes.length)];
console.log(`Player's hand is ${playerHand}`);

compHand = shapes[Math.floor(Math.random() * shapes.length)];
console.log(`Computer's hand is ${compHand}`);
///////////////////////////logic for submitting a shape that is not in the array////////

if (!shapes.includes(playerHand)) {
  console.log(`Are we still playing?`);
}

///////////Player has ROCK//////////////////////////////
if (playerHand === 'rock') {
  if (compHand === 'paper') {
    console.log('Computer wins!');
  } else if (compHand === 'scissors') {
    console.log('Player wins!');
  } else if (compHand === 'rock') {
    console.log('it`s a tie, play again!');
  } else {
    console.log('Are we still playing?');
  }
}

///////////Player has Paper//////////////////////////////

if (playerHand === 'paper') {
  if (compHand === 'scissors') {
    console.log('Computer wins!');
  } else if (compHand === 'rock') {
    console.log('Player wins!');
  } else if (compHand === 'paper') {
    console.log('it`s a tie, play again!');
  } else {
    console.log('Are we still playing?');
  }
}
///////////Player has SCISSORS//////////////////////////////

if (playerHand === 'scissors') {
  if (compHand === 'rock') {
    console.log('Computer wins!');
  } else if (compHand === 'paper') {
    console.log('Player wins!');
  } else if (compHand === 'scissors') {
    console.log('it`s a tie, play again!');
  } else {
    console.log('Are we still playing?');
  }
}
