# JavaScript Loops Part 2

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. Create two files `index.html` and `script.js`
1. Include `script.js` in `index.html` using a `<script>` tag
1. Open `index.html` in your web browser and open the console
1. After answering each section below, `git commit` your work
1. When you're finished or when time is up, push your work to your remote repo, file a Pull Request, and react with a green check on Zoom

---

### Count to 9
Using a `while` loop, print out numbers from 0 to 9 e.g. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

### Every 2
Using a `while` loop, print every second number up to 8 e.g. 0, 2, 4, 6, 8

---

## Guess The Number

You will build a basic "guess the number" game. Your game should keep asking the user to guess a number until they get it correct.

Look up the [`parseInt` function](https://www.w3schools.com/jsref/jsref_parseint.asp) for explicitly coercing the user's guess into a number type.

### Specification:
- Create a variable that contains a whole number between 0 and 10. This is the number that the user will try to guess.
- The user should be asked to guess the number.
- If the user's guess is correct, the user should see a congratulatory message and the game should end.
- If the user's guess is not correct, the user should be asked to guess the number again.

### Extensions
- Each time the user guesses incorrectly, give them some feedback: "Wrong, guess higher!" or "Wrong, guess lower!".
- Rather than hard-coding the number the user is trying to guess in a variable, generate a random whole number (do a web search for "JavaScript random whole number").
