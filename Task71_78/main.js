/*---------------------Arrow Function Challenge--------------*/

// let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,Z';

// let solution = '?????';

// solution = myString.split('').filter(function(ele){
//   return isNaN(parseInt(ele)) && ! ele.startsWith(',');
// });
// solution.shift();
// solution.pop();
// console.log(solution.join('').split('_').join(' '));
console.log('\n')

/*-------------------Task1-------------------*/
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let elzero = mix.map(function(ele){
  return isNaN(parseInt(ele))? ele : '';
}).reduce(function(acc,current){
  return acc + current;
});

console.log(elzero);   // Elzero
console.log('\n')

/*-------------------Task2-------------------*/
// let myString = "EElllzzzzzzzeroo";
// let newString2 = [];
// let newString = myString.split('').filter(function(ele){
//   return ! newString2.includes(ele) && newString2.push(ele);
// }).reduce(function(acc,current){
//   return acc + current;
// })
// console.log(newString); 

// // Elzero
// console.log('\n')

let myString = "EElllzzzzzzzeroo";

let newString = myString.split('').filter(function(ele,index){
  return myString.indexOf(ele) === index;
}).reduce(function(acc,current){
  return acc + current;
})
console.log(newString); 

// Elzero
console.log('\n')
/*-------------------Task3-------------------*/
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function(acc,current){
  return current.length === 1 ? acc + current: acc + current.shift() + current.pop();
})
console.log(newArray); 
// Elzero
console.log('\n')

/*-------------------Task4-------------------*/
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNumsAndStrings = numsAndStrings.filter(function(ele){
  return ! isNaN(parseInt(ele));
}).map(function(ele){
  return -ele;
})
console.log(newNumsAndStrings);
// [-1, -10, 10, 20, -5, -3]
console.log('\n')

/*-------------------Task5-------------------*/
let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce(function(acc,current){
  return current % 2 !==0 ? acc + current: acc * current;
}, 1);
console.log(newNums);
// 500

