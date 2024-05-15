/*-------------------Task1-------------------*/
// let value = window.prompt('Print Number From – To','Example: 5-20');
// let a ,b;
// if (Number (value.split('-')[0]) <= Number(value.split('-')[1])){
//     a = Number (value.split('-')[0]);
//     b = Number (value.split('-')[1]);
// }else {
//     b = Number (value.split('-')[0]);
//     a = Number (value.split('-')[1]);
// }
// for (let index = a; index <= b; index++) {
//     let div = document.createElement('div');
//     div.innerHTML = index;
//     document.body.appendChild(div)
// }

/*-------------------Task2-------------------*/
setTimeout(function(){
    let div = document.createElement('div');
    div.style.cssText = 'background-color: gainsboro; padding: 15px; text-align: center; position: relative; width: 400px; margin: 20px auto; border: 1px solid #333';
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Welcome';
    let p = document.createElement('p');
    p.innerHTML = 'Welcome To Elzero Web School'
    p.style.color = '#333';
    let i = document.createElement('i');
    i.setAttribute('class', 'fa-solid fa-xmark')
    i.style.cssText = 'position: absolute; top: -10px ; right: -5px; font-size: 20px; color: white; width: 20px; height: 20px; background-color: red;';

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(i);
    document.body.appendChild(div);

    let geti = document.querySelector('i');
    geti.onclick = function(){
        let getdiv = document.querySelector('div');
        getdiv.remove();
    }
},3000);

/*-------------------Task3-------------------*/
// let div10 = document.querySelector('div');
// let count = setInterval(function(){
//     div10.innerHTML -=1;
//     if (div10.innerHTML === '0'){
//         clearInterval(count)
//     }
// },1000)

/*-------------------Task4-------------------*/
// let div10 = document.querySelector('div');
// let count = setInterval(function(){
//     div10.innerHTML -=1;
//     if (div10.innerHTML === '0'){
//         location.href = 'https://elzero.org';
//     }
// },1000)

/*-------------------Task5-------------------*/
// let div10 = document.querySelector('div');
// let count = setInterval(function(){
//     div10.innerHTML -=1;
//     if (div10.innerHTML === '5'){
//         window.open('https://elzero.org','','width=500, height=500');
//     }
//     if (div10.innerHTML === '0'){
//         clearInterval(count);
//     }
// },1000)