/*-------------------Test-------------------*/


// let now = new Date();
// let bnew = new Date('oct 25, 82');
// console.log((now - bnew)/1000 / 60 / 60 / 24 / 365);

// console.log(now.getDay())
// console.log('\n')


/*-------------------Task1-------------------*/
let dateNow = new Date();
let birthDay = new Date('jan 1, 2003'); 
console.log(parseInt((dateNow - birthDay) /1000) ,'Seconds');  // Seconds
console.log(parseInt((dateNow - birthDay) /1000 /60) ,'Minutes');  // Minutes
console.log(parseInt((dateNow - birthDay) /1000 /60 /60) ,'Hours');  // Hours
console.log(parseInt((dateNow - birthDay) /1000 /60 /60 /24) ,'Days');  // Days
console.log(parseInt((dateNow - birthDay) /1000 /60 /60 /24 /31) ,'Months');  // Months
console.log(parseInt((dateNow - birthDay) /1000 /60 /60 /24 /31 /12) ,'Years');  // Years

// Needed Output

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"
console.log('\n')
/*-------------------Task2-------------------*/
let DateAfter10Years = new Date('80');
DateAfter10Years.setSeconds(1)
console.log(DateAfter10Years)
// Needed Output

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"

console.log('\n')
/*-------------------Task3-------------------*/
// let  date= new Date();
// date.setDate(0);

// console.log(date);
// previousMonth = date.toLocaleString('default', { month: 'long' });
// console.log(`Previous Month Is ${previousMonth} And Last Day Is ${date.toDateString().split(' ')[2]}`);
// // Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
// console.log('\n')
/*-------------------Task4-------------------*/
let  dateb= new Date();

// one by time stamp
let timeStamp = Date.parse('jan 1, 2003');
console.log(new Date(timeStamp));

// Two by string
console.log(new Date('jan 1, 2003'));

// Three by num
console.log(new Date(2003 ,0 ,1));

// Needed Output

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
console.log('\n')
/*-------------------Task5-------------------*/

// Start
let p1 = performance.now();

for (let index = 0; index < 10000; index++) {
    document.write(`<div>${index}</div>`);
}

// End
let p2 = performance.now();

console.log(`Loop Took ${parseInt(p2 - p1)} Milliseconds.`);
// Needed Output

"Loop Took 1921 Milliseconds."
console.log('\n')
/*-------------------Task6-------------------*/
// Write Your Generator Function Here
function* gen() {
    let index = 1 , a= 14, b = 154, c = b - a , result = b;
    yield a;
    yield b;  
    while (true) {
      result = 200 * index + c + result;
        yield result; 
        index++;
    }
}
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log('\n')
/*-------------------Task7-------------------*/
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here
  function* genAll() {
    yield* [...new Set(genNumbers())];
    yield* [...new Set(genLetters())];
  }
  
  let generator1 = genAll();
  
  console.log(generator1.next()); // {value: 1, done: false}
  console.log(generator1.next()); // {value: 2, done: false}
  console.log(generator1.next()); // {value: 3, done: false}
  console.log(generator1.next()); // {value: 4, done: false}
  console.log(generator1.next()); // {value: 5, done: false}
  console.log(generator1.next()); // {value: "A", done: false}
  console.log(generator1.next()); // {value: "B", done: false}
  console.log(generator1.next()); // {value: "C", done: false}
  console.log(generator1.next()); // {value: "D", done: false}

  console.log('\n')
/*-------------------Task8-------------------*/
  // main.js File
import calc from "./mod-one.js";
import {modOne} from "./mod-two.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

