/*---------------------Task1--------------*/
let start = 10;
let end = 100;
let exclude = 40;

// Output
10
20
30
50
60
70
80
90
100
console.log('\n');
for(i = start; i <= end ; i+=start) {
    if (i === exclude) continue
    console.log(i);
}

/*---------------------Task2--------------*/
let start1 = 10;
let end1 = 0;
let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
console.log('\n');
for(i = start; i >= stop ; i--) {
    if (i < start1) console.log(`0${i}`);
    else {
        console.log(String (i));
    }
}

/*---------------------Task3--------------*/
let start2 = 1;
let end2 = 6;
let breaker = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
console.log('\n');
for(i = start2; i <= end2 ; i++) {
    console.log(i);
    for(j = breaker; j <= breaker*breaker ; j+=breaker) {
        console.log(`-- ${j}`)
    }
}

/*---------------------Task4--------------*/
let index = 10;
let jump = 2;

console.log('\n');
for (;;) {
  // Write Your Code Here
    if (index === jump) {
        break;
    }
    console.log(index);
    index-=jump;
}

// Output
// 10
// 8
// 6
// 4

/*---------------------Task5--------------*/
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = +true;
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
console.log('\n');
for(i = +false; i < friends.length ; i++) {
    if (letter.toUpperCase() !== friends[i][+false]){
        console.log(`"${count++} => ${friends[i]}"`);
    }
}

/*---------------------Task6--------------*/
let start3 = 0;
let swappedName = "elZerO";
let arr = [];

// Output
"ELzERo"
console.log('\n');
for(i = start3; i < swappedName.length ; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()){
        console.log(swappedName[i].toLowerCase())
        arr.push(swappedName[i].toLowerCase());
    }
    else{
        console.log(swappedName[i].toUpperCase())
        arr.push(swappedName[i].toUpperCase());
    }
}
console.log(`"${arr.join('')}"`);

/*---------------------Task7--------------*/
let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
2
3
4
console.log('\n');
for(i = start4; i < mix.length ; i++) {
    if ( typeof mix[i] === 'number') {
        if (i) console.log(mix[i]);
    }
}