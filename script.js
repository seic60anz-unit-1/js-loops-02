//----------------------------------------
// COUNT TO 9

let i = 0
let output = ""
while (i <= 9) {
    output += `${i}, `
    i++
}
// removes the trailing , and space after that
output = output.slice(0, -2)
console.log(output)

//----------------------------------------
// EVERY 2

i = 0
output = ""
while (i <= 8) {
    if (i % 2 === 0) {
        output += `${i}, `
    }
    i++
}
output = output.slice(0, -2)
console.log(output)

//----------------------------------------
// GUESS THE NUMBER

// a random whole number between 0 and 10
const num = Math.floor(Math.random() * 11)

while (true) {
    const userInput = parseInt(prompt("Guess what number is in my head."))
    if (userInput === num) {
        console.log("Congrats! You're correct.")
        console.log(`The number was ${num}!`)
        break
    } else {
        if (userInput < num) {
            console.log("Wrong, guess higher!")
        } else if (userInput > num) {
            console.log("Wrong, guess lower!")
        }
    }
}