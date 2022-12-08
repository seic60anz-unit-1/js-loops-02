// Count to 9 
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// Every 2 
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i+=2
// }

// Guess The Number 
const num = 9
let answer = parseInt(prompt("Guess a number between 0 & 10."))

for (let i = 1; i < 10; i++) {
    if (i % 9 !== 0) {
        console.log("Guess again")
        break
    } else if (i % 9 === 0) {
        console.log("Congrats! You guessed it right!")
        break
    } 
}

// parseInt("", 8)