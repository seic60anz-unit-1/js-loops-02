// Count to 9
let i = 0
while(i<10){
console.log(i)
i++
}

// Every 2
let j = 0
while(j<10){
    console.log(j)
    j+=2
}

// Guess The Number
let randomNumber = Math.floor(Math.random() * 11)
while(true){
    let guess = parseInt(prompt('What is your guess?'))
    if(guess === randomNumber){
        console.log(`congratulation! the number is ${guess}`)
        break
    } else if (randomNumber > guess) {
        console.log("Wrong, guess higher!")
        guess = NaN
        continue
    } else if (randomNumber < guess) {
        console.log("Wrong, guess lower!")
        guess = NaN
        continue
    } else {
        console.log("Put the number!")
        guess = NaN
        continue
    }
}
