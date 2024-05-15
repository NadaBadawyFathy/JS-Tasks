/*---------------------Task1--------------*/
// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// /*---------------------Task2--------------*/
// let num = 3;
// let b = +true;
// // Solution One
// console.log(num * (++b)); // 6

// // Solution Two
// console.log(num + (++b) ); // 6

// // Soultion Three
// console.log(--num + (++b)); // 6

// // Soultion Four
// console.log(--num + (++b)); // 6

// // Solution Five
// console.log(++b); // 6

// // Solution Six
// console.log((++b) - num); // 6

/*---------------------Task3--------------*/
let num = "10";

// Solution One
console.log((+num) + (+num)); // 20

// Solution Two
console.log(++num + --num - (num - --num)); // 20

// Solution Three
console.log(++num + --num + (num - --num)); // 20

// Solution Four
console.log(++num + --num + (num - --num) + (num - --num) + (num - --num)); // 20

/*---------------------Task4--------------*/
let points = 10;

// Write Your Code Here

console.log(points + (++points - --points) + (++points - --points) + (++points - --points)); // 13

// Write Your Code Here

console.log(points - (++points - --points) - (++points - --points)); // 8;