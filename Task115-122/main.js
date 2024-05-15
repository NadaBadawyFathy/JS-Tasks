/*-------------------Destructuring Challenge -------------------*/
let chosen = 3;

let myFriends = [
    {title: 'Osama', age: 39, available: true, skills: ['Html','CSS']},
    {title: 'Ahmed', age: 25, available: false, skills: ['Python','Diango']},
    {title: 'Sayed', age: 33, available: true, skills: ['PHP','Laravel']},
]

// ch 1
if (chosen === 1){
    // very easy
    // ({title, age, available, skills: [,c]} = myFriends[0]);

    [ {title, age, available, skills: [,c]}, ,] = myFriends

    if (available){
        available = 'Available'
    }else {
        available = 'Not Available'
    }
    console.log(title);
    console.log(age);
    console.log(available);
    console.log(c);
}

// ch 2
if (chosen === 2){
    // ({title, age, available, skills: [,c]} = myFriends[1]);

    [ ,{title, age, available, skills: [,c]},] = myFriends

    if (available){
        available = 'Available'
    }else {
        available = 'Not Available'
    }
    console.log(title);
    console.log(age);
    console.log(available);
    console.log(c);
}

// ch 3
if (chosen === 3){
    // ({title, age, available, skills: [,c]} = myFriends[2]);

    [ , ,{title, age, available, skills: [,c]}] = myFriends

    if (available){
        available = 'Available'
    }else {
        available = 'Not Available'
    }
    console.log(title);
    console.log(age);
    console.log(available);
    console.log(c);
}
console.log('\n')

/*-------------------Task1-------------------*/
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here

[a, , , , e] = myNumbers
console.log(a * e); // 5
console.log('\n')

/*-------------------Task2-------------------*/
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

[a, b, c, [d, e, [f,g]]] = mySkills
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
console.log('\n')

/*-------------------Task3-------------------*/
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

[c, , , , , , , a, b] = arr1.concat(arr2,arr3);
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
console.log('\n')

/*-------------------Task4-------------------*/
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  
  // Write Your Destructuring Assignment Here
  ({
    age: a,
    working: w,
    country: c,
    hobbies: [h1, , h3],
  } = member);

  console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  
  console.log(`I Live in ${c}`);
  // I Live in Egypt
  
  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming
console.log('\n')

/*-------------------Task5-------------------*/
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};
// access by key + values
let obj3 = Object.values(game)[2];
let o = Object.keys(obj3)[0];
let aa = Object.keys(obj3)[1];
// Write Your Destructuring Assignment/s Here
({
    title: t,
    developer: d,
    releases: {
      "Oath In Felghana": [u, j],
      "Ark Of Napishtim": {
        US: u_price,
        JAP: j_price,
      },
      Origin: or,
    },
} = game);

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${aa}`);
// Although I Love Ark Of Napishtim

console.log(`${aa} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${aa} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

console.log('\n')

/*-------------------Task6 Done in Challenge-------------------*/

// let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// // Write Your Code Here

// // If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"