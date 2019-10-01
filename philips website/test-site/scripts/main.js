//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Curriculum Vitae';

/*function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);*/

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/PA.png') {
      myImage.setAttribute ('src','images/PA1.png');
    } else if(mySrc === 'images/PA1.png') {
      myImage.setAttribute ('src','images/PA2.png');
    }
    else {
      myImage.setAttribute ('src','images/PA.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello, ' + myName +"thanks for checking my page out";
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = "Hello " + storedName +  ", thanks for checking my page out";
}
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello ' + myName +" , thanks for checking my site.";
  }
}
