//Count to 9

// let i = 0
// while (i <= 9) {
//     console.log (i)
//     i++
// }

//Every 2

// let i = 0
// while (i <= 8) {
//     if (i === 0) {
//         console.log(i)
//         i++
//         continue
//     }
//     if (i % 2 === 0){
//         console.log(i)
//     }
//     i++
// }

//Guess The Number

let x = parseInt(Math.random()*10)

let input = 11
while (input != x) {
    input = parseInt(prompt("Guess the number between 0 and 10"))
    while (!Number.isInteger(input) || input > 10 || input < 0) {
            alert("Please enter an integer between 0 and 10!")
            input = parseInt(prompt("Guess the number between 0 and 10"))
    }
    alert(`You guess it is ${input}!`)

    if (input === x) {
        alert("Congrat! You guess it correctly!")
    }
    if (input > x) {
        alert("Wrong, guess lower!")
    }
    if (input < x) {
        alert("Wrong, guess higher!")
    }
    
}