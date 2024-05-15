/*-------------------Task1-------------------*/

let myPromise = new Promise ((resolve, reject) => {

  let myData = new XMLHttpRequest ();
  myData.open('GET', "object.json");
  myData.send();

  myData.onreadystatechange = function () {
    if (this.status === 200){
      let response = JSON.parse(this.responseText);
      response.length = 5;
      resolve(response);
    } else {
      reject(Error ('Not Valid'))
    }
  }
})

myPromise.then(
  (resolveValue) => {
    for (let index = 0; index < resolveValue.length; index++) {
      let div = document.createElement('div');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');

      h3.innerHTML = resolveValue[index].title;
      div.appendChild(h3);

      p.innerHTML = resolveValue[index].description;
      div.appendChild(p);

      document.body.appendChild(div)
    }
    let hr = document.createElement('hr');
    document.body.appendChild(hr)
  }
).catch((rejectValue) => console.log(`Rejected: ${rejectValue}`))

/*-------------------Task2-------------------*/

fetch('object.json').then(
  (res) => {
    return res.json();
  }
).then(
  (res) => {
    res.length = 5;
    return res;
  }
).then (
  (res) => {
    for (let index = 0; index < res.length; index++) {
      let div = document.createElement('div');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');

      h3.innerHTML = res[index].title;
      div.appendChild(h3);

      p.innerHTML = res[index].description;
      div.appendChild(p);

      document.body.appendChild(div)
    }
  }
).catch((rejectValue) => console.log(`Rejected: ${rejectValue}`))

