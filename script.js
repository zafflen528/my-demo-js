let iceCream = 'chocolate';
let myHeading = document.querySelector('h1');

function multiply(num1,num2){
    return num1 * num2;
}

function setUserName(){
    let myName =prompt("Please enter your name.");
    if (!myName){
        setUserName();
    }else {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}