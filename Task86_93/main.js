/*-------------------#90 Product with Title and description practice-------------------*/

for (let index = 0; index < 100; index++) {

let div = document.createElement('div');
div.className = 'product';

// Append H3 to div
let heading = document.createElement('h2');
let textHeading = document.createTextNode('This Is H3 '+ [index+1]);
heading.appendChild(textHeading);
div.appendChild(heading);

// Append H3 to Para
let para = document.createElement('p');
let textPara = document.createTextNode('This Is P '+ [index+1]);
para.appendChild(textPara);
div.appendChild(para);

document.body.appendChild(div)
}
console.log('\n')

/*-------------------Task1-------------------*/

//querySelector
let myway1 = document.querySelector('div');
console.log(myway1);
let myway2 = document.querySelector('.element');
console.log(myway2);
let myway3 = document.querySelector('#elzero');
console.log(myway3);
let myway4 = document.querySelector("[name='js']")
console.log(myway4);

// querySelectorAll              
let myway5 = document.querySelectorAll("div")[0]
console.log(myway5);
let myway6 = document.querySelectorAll(".element")[0]
console.log(myway6);
let myway7 = document.querySelectorAll("#elzero")[0]
console.log(myway7);
let myway8 = document.querySelectorAll("[name='js']")[0]
console.log(myway8);

//TagName
let myway9 = document.getElementsByTagName('div')[0]
console.log(myway9);

//ClassName
let myway10 = document.getElementsByClassName('element')[0]
console.log(myway10);

//Id
let myway11 = document.getElementById('elzero')
console.log(myway11);

//Name
let myway12 = document.getElementsByName('js')[0]
console.log(myway12);

//children
let myway13 = document.body.children[0]
console.log(myway13);

//childNodes
let myway14 = document.body.childNodes[3]
console.log(myway14);

//firstElementChild
let myway15 = document.body.firstElementChild
console.log(myway15);

/*-------------------Task2-------------------*/
for (let index = 0; index < 10; index++) {
    document.images[index].src = 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png';
    document.images[index].alt = 'Elzero Logo';
}

/*-------------------Task3-------------------*/
let val = document.querySelector("[name='dollar']");
let res = document.querySelector('.result');
val.onkeyup = function (params) {
    res.innerHTML = `{${val.value}} USD Dollar = {${(val.value * 15.6).toFixed(2)}} Egyptian Pound`;
}
val.onclick = function (params) {
    res.innerHTML = `{${val.value}} USD Dollar = {${(val.value * 15.6).toFixed(2)}} Egyptian Pound`;
}

/*-------------------Task4-------------------*/
//change Content
let inner2 = document.querySelector('.one').innerHTML;
let inner1 = document.querySelector('.two').innerHTML;

document.querySelector('.one').innerHTML = inner1;
document.querySelector('.two').innerHTML = inner2 + ` ${2}`;

//change title
let tit2 = document.querySelector('.one').getAttribute('title');
let tit1 = document.querySelector('.two').getAttribute('title');

document.querySelector('.one').setAttribute('title',tit1);
document.querySelector('.two').setAttribute('title',tit2);

/*-------------------Task5-------------------*/
for (let index = 10; index < 15; index++) {
    if (document.images[index].alt ===''){
        document.images[index].alt = 'Elzero New';
    }else{
        document.images[index].alt = 'old';
    }
}

/*-------------------Task6-------------------*/
let num = document.querySelector('[name="elements"]');
let text = document.querySelector('[name="texts"]');
let  type = document.querySelector('[name="type"]');

let result = document.querySelector('.results');

document.forms[1].onsubmit = function (params) {
    let  ckeck = document.getElementsByClassName('box');
    let len = ckeck.length;

    // this way to remove any element in side result
    while(len!=0){
        ckeck[0].remove();
        len--;
    }

    for (let index = 0; index < num.value; index++) {
        let ele = document.createElement(type.value);
        ele.setAttribute('class','box');
        ele.setAttribute('title','Element');
        ele.setAttribute('id','id-'+index+1);
        ele.innerHTML = text.value;
        ele.style.background = 'blue';
        ele.style.padding = '10px';
        result.appendChild(ele);
    }
    params.preventDefault();
}








