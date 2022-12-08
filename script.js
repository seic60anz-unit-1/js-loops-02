// console.log('Count to 9')
// let i9 = 0;
// while (i9 < 9) {
// 	i9++
// 	console.log(i9)
// }

// console.log('Every 2')
// // Using a `while` loop, print every second number up to 8 e.g. 0, 2, 4, 6, 8
// let i2 = 0;
// while (i2 < 8) {
// 	i2 += 2
// 	console.log(i2)
// }


const CPU = Math.floor(Math.random() * 11)
let userGuess = null
const guessGame = function() {
while (true) {
	console.log(`User Input | ${userGuess} CPU| ${CPU}`)
	console.log(`CPU| ${CPU}`)
	if (userGuess === CPU) {
		alert("You guessed right")
		break
	} else if (userGuess > CPU) {
		userGuess = parseInt(prompt('You have guessed to high, try again'))
	} else if (userGuess < CPU) {
		userGuess = parseInt(prompt('You have guessed to low, try again'))
	}
}}
