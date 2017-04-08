var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/battle.jpg') {
        myImage.setAttribute ('src', 'images/geek.jpg');
    } else {
        myImage.setAttribute ('src', 'images/battle.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Spores, ' + myName + "! Spores.";
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Spores, ' + storedName + "! Spores.";
}

myButton.onclick = function() {
    setUserName();
}
