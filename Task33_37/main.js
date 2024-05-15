/*---------------------Task1--------------*/

// Test Case 1
let num = 9; // "009"
if (num < 10) {
    console.log('00' +''+num);
}
// Test Case 2
let num1 = 20; // "020"
if (num1 > 10 && num1 < 100) {
    console.log(`${0}${num1}`);
}
// Test Case 3
let num2 = 110; // "110"
if (num2 >= 100) {
    console.log(String(num2));
}

/*---------------------Task2--------------*/

let num3 = 9;
let str = "9";
let str2 = "20";

// Output
"{num3} Is The Same Value As {str}"
if (num3 == str) {
    console.log(`${num3} Is The Same Value As ${str}`);
}

"{num3} Is The Same Value As {str} But Not The Same Type"
if (num3 == str && typeof(num3) != typeof(str)) {
    console.log(`${num3} Is The Same Value As ${str} But Not The Same Type`);
}

"{num3} Is Not The Same Value Or The Same Type As {str2}"
if (num3 != str2 && typeof(num3) != typeof(str2)) {
    console.log(`${num3} Is Not The Same Value Or The Same Type As ${str2}`);
}

"{str} Is The Same Type As {str2} But Not The Same Value"
if (str != str2 && typeof(str) == typeof(str2)) {
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}

/*---------------------Task3--------------*/

let num4 = 10;
let num5 = 30;
let num6 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num6} Value And Type Is Not The Same As {num4} And Type Is Not The Same As {num5}"

if (num6 > num4) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
    if (num6 > num4 && num6 == num5 && typeof(num6) != typeof(num5)) {
        console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
    }
    if (num6 != num4 && typeof(num6) != typeof(num4) && typeof(num6) != typeof(num5)) {
        console.log(`${num6} Value And Type Is Not The Same As ${num4} And Type Is Not The Same As ${num5}`)
    }
}
/*---------------------Task4--------------*/

// Edit What You Want Here

let num7 = 10;
let num8 = 1;
let num9 = 10;
let num10 = 40;

/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/

// Condition 1

if (num7 > num8) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num7 > num8 && num7 < num10) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num7 > num8 && num7 === num9) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num7 + num8) < num10) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num7 + num9) < num10) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num7 + num8 + num9) < num10) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num10 - (num7 + num9) + num8 === 21) {
    console.log("True");
} else {
    console.log("False");
}