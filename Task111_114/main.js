/*-----------------------local storage color application practice V 112------------------------*/
// let li = document.querySelectorAll('ul li');
// let exp = document.querySelector('div');

// li.forEach(function(ele){
//     ele.onclick = function(){
//         li.forEach(function(ele){
//             ele.classList.remove('active')
//         })
//     window.localStorage.color = this.className;
//     exp.style.backgroundColor = this.className;
//     this.classList.add('active');
//     }
//     if (window.localStorage.color === ele.className){
//         li.forEach(function(ele){
//             ele.classList.remove('active');
//         })
//         ele.classList.add('active');
//     }
//     exp.style.backgroundColor = window.localStorage.color;
// });

// anthor solve 

/*--------------------------session storage and use cases V 113--------------------------*/
// let inp = document.querySelector('.name');

// inp.onblur = function(){
//     window.sessionStorage.setItem('value',this.value);
// }
// if (window.sessionStorage.getItem('value')){
//     inp.value = window.sessionStorage.getItem('value');
// }

/*--------------------------BOM Challenge--------------------------*/

// let input = document.querySelector('.input');
// let add = document.querySelector('.add');
// let tasks = document.querySelector('.tasks');
// let i = 0;
// add.onclick = function(){
//     if (input.value === ''){        
//     }else{

//         // create div
//         let div = document.createElement('div');
//         div.style.cssText = 'padding: 15px; border-radius: 5px; color: black; background-color: white; display: flex; justify-content: space-between;  margin-bottom: 10px;'
//         div.innerHTML = input.value;

//         // create btn
//         let btn = document.createElement('button');
//         btn.innerHTML = 'Delete';
//         btn.style.cssText = 'color: white; background-color: black; padding: 5px; border-radius: 5px;';
//         btn.className = `${i}`
//         div.appendChild(btn);

//         // add div to tasks
//         tasks.appendChild(div);

//         // remove div
//         btn.onclick = function(){
//             div.remove();
//             window.localStorage.setItem('tasks',tasks.innerHTML);
//         }

//         // add tasks in localStorage
//         window.localStorage.setItem('tasks',tasks.innerHTML);

//         input.value = '';
        
//     }
// }

// tasks.innerHTML = window.localStorage.getItem('tasks');

// let task = document.querySelectorAll('.tasks div');
// task.forEach(function(ele){
//     // remove div
//     ele.onclick = function(){
//         this.remove();
//         window.localStorage.setItem('tasks',tasks.innerHTML);
//     }
// })

/*--------------------------Task1--------------------------*/
let sc = document.querySelector("[name='sc']");
let sc1 = document.querySelector("[name='sc1']");
let sc2 = document.querySelector("[name='sc2']");
let nada = document.querySelector('.nada');

// sc font family
if (!window.localStorage.getItem('value')){
    window.localStorage.setItem('value','Open Sans');
}
sc.onclick = function() {
    window.localStorage.setItem('value',sc.value);
    
    nada.style.fontFamily = `'${sc.value}'`;
}
sc.value = window.localStorage.getItem('value')
nada.style.fontFamily = `'${window.localStorage.getItem('value')}'`

//sc1 color
if (!window.localStorage.getItem('value1')){
    window.localStorage.setItem('value1','red');
}
sc1.onclick = function() {
    window.localStorage.setItem('value1',sc1.value);

    nada.style.color = sc1.value;
}
sc1.value = window.localStorage.getItem('value1')
nada.style.color = `${window.localStorage.getItem('value1')}`

//sc2 font size
if (!window.localStorage.getItem('value2')){
    window.localStorage.setItem('value2','16');
}
sc2.onclick = function() {
    window.localStorage.setItem('value2',sc2.value);

    nada.style.fontSize = `${sc2.value}px`;
}
sc2.value = window.localStorage.getItem('value2')
nada.style.fontSize = `${window.localStorage.getItem('value2')}px`;

// window.localStorage.clear();

/*--------------------------Task2--------------------------*/
let inp = document.querySelector("[type='text']");
let inp1 = document.querySelector("[type='email']");
let inp2 = document.querySelector("[type='password']");
let skills = document.querySelector("[name='skills']");

// input for username
inp.onkeyup = function () {
    window.sessionStorage.setItem('val',inp.value);
}
inp.value = window.sessionStorage.getItem('val');

// input for email
inp1.onkeyup = function () {
    window.sessionStorage.setItem('val1',inp1.value);
}
inp1.value = window.sessionStorage.getItem('val1');

// input for password
inp2.onkeyup = function () {
    window.sessionStorage.setItem('val2',inp2.value);
}
inp2.value = window.sessionStorage.getItem('val2');

// select
skills.onclick = function () {
    window.sessionStorage.setItem('val3',skills.value);
}
skills.value = window.sessionStorage.getItem('val3');




