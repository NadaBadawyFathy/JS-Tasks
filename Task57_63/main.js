/*---------------------Function Challenge--------------*/

function showDetails(a, b, c){
    (typeof a === 'string')? Name = a: a = a;
    (typeof b === 'string')? Name = b: b = b; 
    (typeof c === 'string')? Name = c: c = c;
    (typeof a === 'number')? Age = a: a = a;
    (typeof b === 'number')? Age = b: b = b;
    (typeof c === 'number')? Age = c: c = c;
    (typeof a === 'boolean')? Status = a: a = a;
    (typeof b === 'boolean')? Status = b: b = b;
    (typeof c === 'boolean')? Status = c: c = c;

    (Status)? console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`): console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`)
}

showDetails('Osama', 38, true);  
showDetails(38, 'Osama', true);
showDetails(true, 38, 'Osama');
showDetails(false, 'Osama', 38);

console.log('\n')

/*-------------------Task1-------------------*/
function sayHello(theName, theGender) {
    // Your Code Here
    if (theGender === undefined) {
        console.log(`Hello ${theName}`)
    }else {
        if (theGender === 'Male') {
            console.log(`Hello Mr ${theName}`)
        }else {
            console.log(`Hello Miss ${theName}`)
        }
    }
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

console.log('\n')
/*-------------------Task2-------------------*/
function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if (operation === 'add') {
        console.log(firstNum + secondNum)
    }
    else if (operation === 'subtract') {
        console.log(firstNum - secondNum)
    }
    else if (operation === 'multiply') {
        console.log(firstNum * secondNum)
    }
    else if (secondNum === undefined) {
        console.log(`Second Number Not Found`)
    }
    else {
        console.log(firstNum + secondNum)
    }
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

console.log('\n') 
/*-------------------Task3-------------------*/
function ageInTime(theAge) {
    // Your Code Here
    if (theAge > 10 && theAge < 100) {
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 12 * 4} Weeks`);
        console.log(`${theAge * 12 * 4 * 7} Days`);
        console.log(`${theAge * 12 * 4 * 7 * 24} Hours`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60} minutes`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`);
    }else {
        console.log(`Age Out Of Range`)
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

console.log('\n') 
/*-------------------Task4-------------------*/
function checkStatus(a, b, c) {
    // Your Code Here
    // Same challenge solution
    (typeof a === 'string')? Name = a: a = a;
    (typeof b === 'string')? Name = b: b = b; 
    (typeof c === 'string')? Name = c: c = c;
    (typeof a === 'number')? Age = a: a = a;
    (typeof b === 'number')? Age = b: b = b;
    (typeof c === 'number')? Age = c: c = c;
    (typeof a === 'boolean')? Status = a: a = a;
    (typeof b === 'boolean')? Status = b: b = b;
    (typeof c === 'boolean')? Status = c: c = c;

    (Status)? console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`): console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`)
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log('\n') 
/*-------------------Task5-------------------*/
function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`)
    for(let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`)
    }
    console.log(`</select>`)
}
createSelectBox(2000, 2021);

console.log('\n') 
/*-------------------Task6-------------------*/
function multiply(...element) {
    let result = 1;
    for(let i = 0; i < element.length; i++) {
        if (typeof element[i] === 'number') {
            result *= parseInt (element[i]);
        }
    }
    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
