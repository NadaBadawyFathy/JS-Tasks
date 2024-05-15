/*---------------------challenges--------------*/
let zero = 0;
let counter = 3;

let my = ["Ahmed","Mazero","Elham", "Osama", "Gamal","Ameer"];
// Write Code Here 
my.pop();
my.pop();
my.reverse();
console.log(my) // ["Osama","Elham","Mazero","Ahmed"]

console.log(my.slice(++zero,counter)) // ["Elham","Mazero"]

console.log(`"${my[zero].slice(--zero,--counter).concat(my[counter].slice(counter))}"`); // "Elzero"

console.log(`"${my[counter][my.length].concat(my[counter][++my.length].toUpperCase())}"`); // "rO"



/*---------------------Task1--------------*/

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

/*---------------------Task2--------------*/

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

/*---------------------Task3--------------*/

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

/*---------------------Task4--------------*/

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.reverse()[0][0].slice(website.length).toUpperCase()); // ZERO

/*---------------------Task5--------------*/

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log('Found')
}
if (haystack.indexOf(needle)) {
    console.log('Found')
}
if (haystack.lastIndexOf(needle)) {
    console.log('Found')
}

/*---------------------Task6--------------*/

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr1,arr2).sort().slice(arr2.length).join('').toLowerCase()); // fxy