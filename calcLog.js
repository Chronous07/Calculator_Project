const calculator = document.getElementById('calculator').querySelector('#container');
const calcDisplay = calculator.querySelector('#display');

//A listener event to associate a keyboard reference to a button click.
//For now just have the listener created and logged in console but later
//need to update to take the same action as clicking the button with the 
//mouse
document.addEventListener('keydown', (e)=> {
    if(e.key === '0') {console.log(e.key);}
    if(e.key === '1') {console.log(e.key);}
    if(e.key === '2') {console.log(e.key);}
    if(e.key === '3') {console.log(e.key);}
    if(e.key === '4') {console.log(e.key);}
    if(e.key === '5') {console.log(e.key);}
    if(e.key === '6') {console.log(e.key);}
    if(e.key === '7') {console.log(e.key);}
    if(e.key === '8') {console.log(e.key);}
    if(e.key === '9') {console.log(e.key);}
    if(e.key === '/') {console.log(e.key);}
    if(e.key === '*') {console.log(e.key);}
    if(e.key === '%') {console.log(e.key);}
    if(e.key === '-') {console.log(e.key);}
    if(e.key === '+') {console.log(e.key);}
    if(e.key === '.') {console.log(e.key);}
    if(e.key === 'Delete') {console.log(e.key);}
    if(e.key === '=' || e.key === 'Enter') {console.log(e.key);}
});

calculator.addEventListener('click', (event) =>handleEvent(event));

function handleEvent(event) {
    let clickedObject = event.target;
    if (clickedObject.nodeName === 'BUTTON') {
        calcDisplay.textContent += clickedObject.textContent;
    }
}

function add(num1, num2){
    return (num1 + num2);
}

function subtract(num1, num2){
    return (num1 - num2);
}

function multiply(num1, num2){
    return (num1 * num2);
}

function divide(num1, num2){
    if (num2===0){return "Division by zero is not allowed"}
    return (num1 / num2);
}

function operate(num1, operator, num2){
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '/':
            return divide(num1, num2);
        case '*':
            return multiply(num1, num2);
        default: 
            return `Error, operator ${operator} is not recognized`
    }
} 