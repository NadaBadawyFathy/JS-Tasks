// Task2
window.onload = function() {
    document.querySelector("h1").style.color ="blue";
    document.querySelector("h1").style.fontSize ="80px";
    document.querySelector("h1").style.fontWeight ="bold";
    document.querySelector("h1").style.textAlign ="center";
    document.querySelector("h1").style.fontFamily ="Arial";
}

// Task3
console.log('%cElzero %cWeb %cSchool','color: red; font-size: 40px;','color: green; font-size: 40px; font-Weight: bold;','color: white; background: blue; font-size: 40px;')

// Task4
console.group('%cGroup 1','font-Weight: bold; font-size: 20px;')
console.log('Message One')
console.log('Message Two')

console.group('%cChild Group','font-Weight: bold; font-size: 20px;')
console.log('Message One')
console.log('Message Two')

console.group('%cGrand Child Group','font-Weight: bold; font-size: 20px;')
console.log('Message One')
console.log('Message Two')

console.groupEnd()
console.groupEnd()
console.groupEnd()

console.group('%cGroup 2','font-Weight: bold; font-size: 20px;')
console.log('Message One')
console.log('Message Two')

// Task5
console.table(['Elzero','Aya','Nada','Mostafa','Yousef'])

// Task6
// /* */
console.log("Iam In Console");
document.write("Iam In Page");
