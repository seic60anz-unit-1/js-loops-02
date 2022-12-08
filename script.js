//Count to 9

// let i = 0
// while (i <= 9) {
//     console.log (i)
//     i++
// }

//Every 2

let i = 0
while (i <= 8) {
    if (i === 0) {
        console.log(i)
        i++
        continue
    }
    if (i % 2 === 0){
        console.log(i)
    }
    i++
}