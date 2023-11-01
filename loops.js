// let x = true
// let y = false

// console.log(x && x)
// console.log(x && y)
// console.log(y && x)
// console.log(y && y)

// console.log(x || x)
// console.log(x || y)
// console.log(y || x)
// console.log(y || y)

// let x = 12

// if (x == 12){
//     console.log("Dags för lunch.")
// }
// else {
//     "Det är inte dags för lunch."
// }

// let varv = 5
// while (varv < 9){
//     console.log(varv)
//     varv += 1
// }

// let varv = 20
// while (varv > 12){
//     console.log(varv)
//     if (varv == 16){
//         varv -= 1
//     }
//     varv -= 2
// }

// let x = 0
// while (x < 5){
//     x++
// }
// console.log(x)

// let x = 0
// while (x < 5){
//     x++
//     if (x == 3){
//         console.log(x)
//     }
// }
// console.log(x)

// let varv = 0
// while (!(varv > 7)){
//     varv++
//     console.log(varv)
// }

// let x = 1

// for (let i = 0; i < 10; i++){
//     x *= 2
// }
// console.log(x)

// let summa = 0
// for (let i = 1; i <= 10; i++){
//     summa += i
//     console.log(i)
// }
// console.log(summa)

// let x = 65536

// while (x > 1){
//     console.log(x)
//     x/=2
// }
// console.log(x)

// let balance = 100
// let days = 0
// while (balance > 7){
//     balance -= 7
//     days++
//     console.log(days)
// }

// let dagar = 0
// let x = 0
// while (x < 10){
//     if (x == 0 || x == 4 || x == 8){
//     dagar += 366}
//     else {
//         dagar += 365
//     }
//     x++
// }
// let sentence = `10 år är ${dagar} dagar.`
// console.log(sentence)

// let a = 3
// let b = 4
// let c = a*a + b*b
// let hypotenuse = Math.sqrt(c)

// console.log(hypotenuse)

// let a, b;

// a = 0;
// for (let count = 0; count < 10; count++) {
//   a = a + 1;
//   if (a == 1) {
//     b = 'Rött';
//     console.log(b)
//   } else if {
//     (a == 2) {
//       b = 'Gult';
//       console.log(b)
//     } else {
//         (a == 3) {
//           b = 'Grönt';
//           console.log(b)
//           a = 0;
//       }
//     }
//   }
// }

// let x, k

// for (let i = 1; i < 6; i++){
//     x = ""
//     for (let j = 1; j < 8; j++){
//         k = i + j
//         if (k < 8){
//             x += "#"
//         }
//         else{
//             x += "."
//         }
//     }
//     console.log(x)
// }

let x, k

for (let i = 1; i < 6; i++){
    x = ""
    for (let j = 1; j < 8; j++){
        k = i + j
        if (j = 1){
            x += "#"
        }
        else{
            x += "."
        }
    }
    console.log(x)
}