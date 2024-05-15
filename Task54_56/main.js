/*---------------------LOOP Challenge--------------*/

document.write(`<h1>Loop Challenge</h1><hr>`)


let myAdmins = ['Ahmed','Osama','Sayed','Stop','Samera'];
let myEmployes = ['Amgad','Samah','Ameer','Omar','Othman','Amany','Samia'];
let count1 = +false;
document.write(`<div>We Have X Admins</div>`);
for(let i=0 ;i<myAdmins.length ;i++) {
    if (myAdmins[i]=='Stop') {
        break
    }
    else {
        count1++;
    }
}

document.write(`<div>We Have ${count1} Admins</div>`);
document.write(`<hr>`);

for(let i=0 ;i<count1 ;i++) {
    let count2 = +true;
    document.write(`<div>`);
    document.write(`The Admins For ${i+ (+true)} Is ${myAdmins[i]}`);
    document.write(`<h3>Team Members:</h3>`);
    for(let j=0 ;j<myEmployes.length ;j++) {
        if (myEmployes[j].startsWith(myAdmins[i][+false])) {
            document.write(`<p>- ${count2++} ${myEmployes[j]}</p>`);
        }
    }
    document.write(`</div>`);
    document.write(`<hr>`);
}
/*---------------------Task1--------------*/
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
// "1 => Sayed"
// "2 => Mahmoud"

while(index < friends.length) {
    if (typeof friends[index] !== 'number' && friends[index][+false] !== 'A' ){ counter++;
        console.log(`"${counter} => ${friends[index]}`); 
    }
    index++;
}