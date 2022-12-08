
// ### Count to 9
// Using a `while` loop, print out numbers from 0 to 9 e.g. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

let i = 0;
while (i < 10) {
    console.log(i);
    i++
  }

// ### Every 2
// Using a `while` loop, print every second number up to 8 e.g. 0, 2, 4, 6, 8


let u = 0
while(u < 10) {
    console.log(u)
    u += 2
}

// ## Guess The Number


let randomIndex = Math.floor(Math.random() * 10);
let userGuess = ``;

const game = function(userGuess) {
if(userGuess < randomIndex) {
    console.log(`Guess higher`)
}
if(userGuess > randomIndex) {
    console.log(`Guess lower`);
}
if(userGuess === randomIndex) {
{console.log(`You won!`)}
}
}

console.log(game(4))

// You will build a basic "guess the number" game. Your game should keep asking the user to guess a number until they get it correct.

// Look up the [`parseInt` function](https://www.w3schools.com/jsref/jsref_parseint.asp) for explicitly coercing the user's guess into a number type.

// ### Specification:
// - Create a variable that contains a whole number between 0 and 10. This is the number that the user will try to guess.
// - The user should be asked to guess the number.
// - If the user's guess is correct, the user should see a congratulatory message and the game should end.
// - If the user's guess is not correct, the user should be asked to guess the number again.

// ### Extensions
// - Each time the user guesses incorrectly, give them some feedback: "Wrong, guess higher!" or "Wrong, guess lower!".
// - Rather than hard-coding the number the user is trying to guess in a variable, generate a random whole number (do a web search for "JavaScript random whole number").