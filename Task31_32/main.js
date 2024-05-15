/*---------------------Task1--------------*/

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 === typeof +"-40"); // true
console.log(typeof 10 === typeof -"-40"); // true
console.log(typeof "10" !== typeof 10); // true
console.log(typeof 20 !== typeof false); // true

/*---------------------Task2--------------*/

let num1 = 10;
let num2 = 20;

console.log(10 != 20); // true
console.log(10 !== 20 ); // true
console.log(10 < 20); // true
console.log(20 > 10); // true
console.log(20 >= 10); // true
console.log(!(10 == 20)); // true

/*---------------------Task3--------------*/

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a < b && a > c); // true
console.log(!(a == b) && !(a >= b) && !(a < c) && !(a === c)); // true