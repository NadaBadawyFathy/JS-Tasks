/*-------------------Task1-------------------*/
// apply in articles.json

/*-------------------Task2-------------------*/

let jsData = new XMLHttpRequest();
jsData.open('GET', 'articles.json');
jsData.send();

// console.log(jsData);
// jsData.onreadystatechange = function () {
//   console.log(this.response);
// }

// Needed Output
// setTimeout( () => 
// console.log('Data Loaded')
// , 1000);

"JSON Object Content Here"
"Data Loaded"
/*-------------------Task3-------------------*/
jsData.onreadystatechange = function () {
  // convert json to js
  let mainData = JSON.parse(this.response);
  // print js content
  console.log(mainData);

  // update category to All 
  for (let index = 0; index < mainData.length; index++) {
    mainData[index].category = "All";
  }
  // print update js
  console.log(mainData);

    // convert js to json
  let updatedData = JSON.stringify(mainData);
  // print json content
  console.log(updatedData);

  /*-------------------Task4-------------------*/
  let div = document.createElement('div');
  div.id = 'data';
  for (let index = 0; index < mainData.length; index++) {
    
    let div1 = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerHTML = mainData[index].title;
    div1.appendChild(h2);

    let p = document.createElement('p');
    p.innerHTML = mainData[index].body;
    div1.appendChild(p);

    let p1 = document.createElement('p');
    p1.innerHTML = `Author: ${mainData[index].author}`;
    div1.appendChild(p1);

    let p2 = document.createElement('p');
    p2.innerHTML = `Category: ${mainData[index].category}`;
    div1.appendChild(p2);

    div.appendChild(div1);
  }
  document.body.appendChild(div);
}
// mainData Variable Content

// 0: {id: 1, title: 'Title 1', body: 'Article Number 1 Body', category: 'All', author: 'Ali'}
// 1: {id: 2, title: 'Title 2', body: 'Article Number 2 Body', category: 'All', author: 'Mahmoud'}
// 2: {id: 3, title: 'Title 3', body: 'Article Number 3 Body', category: 'All', author: 'Osama'}
// 3: {id: 4, title: 'Title 4', body: 'Article Number 4 Body', category: 'All', author: 'Sayed'}
// 4: {id: 5, title: 'Title 5', body: 'Article Number 5 Body', category: 'All', author: 'Ahmed'}

// // UpdatedData Variable Content
// "JSON Object Content Here"


