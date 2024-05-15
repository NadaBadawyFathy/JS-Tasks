/*---------------------Arrow Function Challenge--------------*/

// let names = function (...array) {
//     // parameter ?
//     return `String [${array.join('], [')}] => Done !`
// }
// console.log(names('Osama', 'Mohamed', 'Ali', 'Ibrahim'))
// // String [Osama], [Mohamed] ,[Ali], [Ibrahim] => Done !
console.log('\n')

let names = (...array) => `String [${array.join('], [')}] => Done !`;

console.log(names('Osama', 'Mohamed', 'Ali', 'Ibrahim'))
// String [Osama], [Mohamed] ,[Ali], [Ibrahim] => Done !
// console.log('\n')

/*========================================================*/

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) =>    one + two + nums[0];

// console.log(calc(10, myNumbers[0], myNumbers[1]));

let myNumbers = [20, 50, 10, 60];

let calc = function(one, two, ...nums) {
    return one + two + nums[0];
};

console.log(calc(10, myNumbers[0], myNumbers[1]));
console.log('\n')

/*-------------------Task1-------------------*/
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Write Your Code Here
        return `${zName.split(' ')[0]} ${zName.split(' ')[1][0].toUpperCase()}.`
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
      // Write Your Code Here
        return `Your Age Is ${zAge.split(' ')[0]}`
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
        return `You Live In ${zCountry.slice(0,2).toUpperCase()}`
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
      // Write Your Code Here
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${ countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY
console.log('\n')

/*-------------------Task2-------------------*/
let itsMe = () => `Iam A Normal Function`;

  console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log('\n')

/*-------------------Task3-------------------*/
let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
console.log('\n')

/*-------------------Task4-------------------*/
function specialMix(...data) {
    // Your Code Here
    var c = 0, sum = 0;
    for(let i=0 ;i< data.length ;i++){
        if (typeof data[i] === 'number') {
            sum += data[i];
        }
        else{ let number = false;
            for(let j=0 ;j< data[i].length ;j++) {
                if (Number (data[i].slice(0,j))) {
                    number = true;
                }
                else {
                    if (number) {
                        sum += Number (data[i].slice(0,j-1)); break;
                    }
                }
            }
        }
    }
    if (sum) {
        return sum;
    }
    return `All Is Strings`;
}
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
