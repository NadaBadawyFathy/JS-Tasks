/*---------------------Task1--------------*/

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
console.log(day.trim().charAt(0).toUpperCase() + day.trim().substring(1,6))

let day1 = "Friday";
let day2 = "Saturday";
let day3 = "Sunday";
// Output => "No Appointments Available"
switch(day1) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log ("No Appointments Available");
}

let day4 = "Monday";
let day5 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"
switch(day4) {
    case "Monday":
    case "Thursday":
        console.log ("From 10:00 AM To 5:00 PM");
}

let day6 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"
switch(day6) {
    case "Tuesday":
        console.log ("From 10:00 AM To 6:00 PM");
}

let day7 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"
switch(day7) {
    case "Wednesday":
        console.log ("From 10:00 AM To 7:00 PM");
}

let day8 = "World";
// Output => "Its Not A Valid Day"
switch(day8) {
    case "World":
        console.log ("Its Not A Valid Day");
}