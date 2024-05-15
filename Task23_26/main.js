/*---------------------Task1--------------*/

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000.0); // 100000
console.log(10**5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(1e5); // 100000
console.log(Number("100000")); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(Math.trunc(100000.99)); // 100000
console.log(Math.floor(100000.77)); // 100000
console.log(Math.round(100000.22)); // 100000
console.log(parseInt(100000.50)); // 100000

/*---------------------Task2--------------*/

console.log(-Number.MIN_SAFE_INTEGER)

/*---------------------Task3--------------*/

// console.log(Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER)

console.log(Number.MAX_SAFE_INTEGER.toString().length)

/*---------------------Task4--------------*/

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

/*---------------------Task5--------------*/

let num = 10;

console.log((Number.isInteger(num)) + (Number.isInteger(num))); // 2

/*---------------------Task6-------------*/

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10

/*---------------------Task7-------------*/

console.log(Math.trunc(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
