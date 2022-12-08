//// Count to 9
// let i = 0
// while (i < 10) {
// console.log(i)
// i++
// }

//// Every 2
// let i = 0
// while (i < 10) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//     i++
// }

// Math.floor(Math.random() * 'number' //This provides a random number between 0 to a certain number you choose.

////Guess the number basic version
// const number = 4
// let userGuess = parseInt (prompt('Guess the number:'))
// while (true) {
// if (number === userGuess) {
//     console.log('Congrats')
//     break
// } else {
//     console.log('wrong! guess again')
//     userGuess = parseInt (prompt('Guess the number:'))
//     }
// }

////Guess the number advanced version
// const number = Math.floor(Math.random() * 11) //if you want them to guess 1-10 you have to put in the number as 11 as this counts digits and 0 is always included as a digit
// console.log(number)
// while (true) {
//     let userGuess = parseInt(prompt('Guess the number:'))
//     if (isNaN(userGuess)) {
//         console.log('Please input a number.')
//     } else if (number === userGuess) {
//         console.log('Congrats')
//         break
//     } else if (number < userGuess) {
//         console.log('Wrong, guess lower')
//     } else if (number > userGuess) {
//         console.log('Wrong, guess higher')
//     }
// }


////More advanced version that sits in a function
// const guessTheNumber = function () {
//     const number = Math.floor(Math.random() * 11)
//     console.log(number)
//     while (true) {
//         let userGuess = parseInt(prompt('Guess the number:'))
//         if (isNaN(userGuess)) {
//             console.log('Please input a number.')
//         } else if (number === userGuess) {
//             console.log('Congrats')
//             break
//         } else if (number < userGuess) {
//             console.log('Wrong, guess lower')
//         } else if (number > userGuess) {
//             console.log('Wrong, guess higher')
//         }
//     }
// }




