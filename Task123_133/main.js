/*-------------------Map And Set Challenge -------------------*/
/* Hints 
      Can use * , Set , Spread Operator , Math Object Methods
*/
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log((new Set(n2)).keys().next().value * [...n1, ...n2].length)  // 210
console.log('\n')

/*-------------------Task1-------------------*/
// Needed Output

let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers)  // Set(3) {10, 20, 2}
console.log([...setOfNumbers][setOfNumbers.size-1])  // 2

console.log('\n')

/*-------------------Task2-------------------*/
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log([...new Set(myFriends.sort())])  // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log('\n')

/*-------------------Task3-------------------*/
let myInfo = {
      username: "Osama",
      role: "Admin",
      country: "Egypt",
};

    // Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
3
true

let objKeys = Object.keys(myInfo);
let objValues = Object.values(myInfo);

let myMap1 = new Map([[objKeys[0],objValues[0]],[objKeys[1],objValues[1]],[objKeys[2],objValues[2]]]);

console.log(myMap1) // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
console.log(myMap1.size) // 3
console.log(myMap1.has('role')) // true

console.log('\n')

/*-------------------Task4-------------------*/
let theNumber = 100020003000;

// Needed Output
123

console.log(+[...new Set(Array.from(String(theNumber),(e) => +e ? +e:''))].join(''))

console.log('\n')

/*-------------------Task5-------------------*/
let theName = "Elzero";
let myArray = [];
// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']

console.log([...theName])
console.log(Array.from(theName))  // ['E', 'l', 'z', 'e', 'r', 'o']
console.log(theName.split(''))  // ['E', 'l', 'z', 'e', 'r', 'o']
for (let index = 0; index < theName.length; index++) {
      myArray.push(theName[index])
}
console.log(myArray)
console.log(Object.assign([],theName))  // ['E', 'l', 'z', 'e', 'r', 'o']
// console.log(Object.assign([],...theName))  // ['o']

console.log('\n')

/*-------------------Task6-------------------*/

//               Test 1
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

//               Test 2
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

//               Test 3
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// Needed Output
["Z", "Y", "Z", "Y", "A", "D", "E"]

let numNumbers = chars.filter(function (e) {
      return isNaN(e) ? e:'';
})

let lenNum = chars.length - numNumbers.length;
numNumbers.length = chars.length;

numNumbers.copyWithin(lenNum);
console.log(numNumbers)

console.log('\n')

/*-------------------Task7-------------------*/
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
[1, 2, 3, 4, 5, 6]

console.log(numsOne.concat(numsTwo)) // S1

console.log([...numsOne, ...numsTwo]) // S2

// numsOne.push(...numsTwo);
// console.log(numsOne) // S3

numsOne.splice(3,0,...numsTwo);
console.log(numsOne) // S4


console.log('\n')

/*-------------------Task8 Solved In Challenge-------------------*/
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// Needed Output
210