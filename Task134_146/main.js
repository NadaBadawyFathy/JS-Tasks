/*-------------------Regular Expressions Challenge -------------------*/
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let ree = /(https?:\/\/(www.)?)?\w+.\w+(:\d+\/\w+.\w+\?\w+\=\d+\&\w+\=\w+)?/ig;  // Write Your Pattern Here
let re = /(https?:\/\/(www.)?)?\w+.\w+((\d+|\D+)+)?/ig;  // Write Your Pattern Here
console.log(url1.match(re))
console.log(url2.match(re))
console.log(url3.match(re))
console.log(url4.match(re))
console.log(url5.match(re))

console.log('\n')
/*-------------------Task1-------------------*/
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

console.log(ip.match(/\d{4}:\w+\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig));

console.log('\n')
/*-------------------Task2-------------------*/
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']

console.log(specialNames.match(/Os(\d+)?O/ig));

console.log('\n')
/*-------------------Task3-------------------*/
let phone = "+(995)-123 (4567)";

console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig));

console.log('\n')
/*-------------------Task4-------------------*/
let re6 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

console.log('\n')
/*-------------------Task5-------------------*/
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re8 = /\d+(\/?|\s?(-\s)?)\d+(\/?|\s?(-\s)?)\d+/ig; // Write Pattern Here
let re7 = /(\d+|\D)+/ig;
console.log(date1.match(re7)); // "25/10/1982"
console.log(date2.match(re7)); // "25 - 10 - 1982"
console.log(date3.match(re7)); // "25 10 1982"
console.log(date4.match(re7)); // "25 10 82"

console.log('\n')
/*-------------------Task6 Solve in challenge-------------------*/
// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = //; // Write Your Pattern Here

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
