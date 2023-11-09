// function foo(){
//     console.log("test");
// }
// foo("hej");

// let a=foo(3);
// console.log(a);
// function foo(i){
//     return i * i;
// }

// console.log(foo(3,5))
// function foo(x,y){
//     return x * y
// }

// let x = 2
// let y = 3
// let a = foo(foo(x) + foo(y))
// console.log(a)
// function foo(i){
//     return 5 * i
// }

// let a = 5
// function foo(a){
//     a++
// }
// a +=2
// console.log(a)

// var foo = function(i){
//     return 2*i*i
// }
// var goo = function(x, y){
//     return x(y)
// }
// var a=goo(foo, 3)
// console.log(a)

// function greeting(name, city, color){
//     console.log("Hello, " + name + " from " + city + ". Your favorite color is " + color + ".")
// }
// greeting("Tor", "Torslanda", "blå")

// function double(x){
//     if (typeof x == 'number'){
//         x *= 2
//         console.log(x)
//     }
//     else{
//     console.log(x)
//     }
// }

// double(5)
// double('hej')


// Försök att reda ut vad return x(y) gör i satsen ovan. Föga lyckat. Tror att det är en funktion som tar en annan funktion som värde?
// function test(z){
//     z *= 4
// }

// function ret(x, y){
//     return x(y)
// }
// let g = ret(test, 5)
// console.log(g)