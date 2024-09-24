const calculator = document.getElementById('calculator').querySelector('#container');
const calcDisplay = calculator.querySelector('#display');
let number1 = '';
let number2 = '';
let operates = '';
let prbSlv = false;
let counter = 0;

document.addEventListener('keydown', (e)=> {
    if(e.key == '0') {handleInput('0');}
    if(e.key == '1') {handleInput('1');}
    if(e.key == '2') {handleInput('2');}
    if(e.key == '3') {handleInput('3');}
    if(e.key == '4') {handleInput('4');}
    if(e.key == '5') {handleInput('5');}
    if(e.key == '6') {handleInput('6');}
    if(e.key == '7') {handleInput('7');}
    if(e.key == '8') {handleInput('8');}
    if(e.key == '9') {handleInput('9');}
    if(e.key === '/') {handleInput('/');}
    if(e.key === '*') {handleInput('*');}
    if(e.key === '%') {handleInput('%');}
    if(e.key === '-') {handleInput('-');}
    if(e.key === '+') {handleInput('+');}
    if(e.key === '.') {handleInput('.');}
    if(e.key === 'Backspace') {handleInput('C');}
    if(e.key === 'Delete') {handleInput('AC');}
    if(e.key === '=' || e.key === 'Enter') {handleInput('='); }
});

calculator.addEventListener('click', (event) =>{
    let trg = event.target
    if (trg.nodeName === 'BUTTON') {
            handleInput(trg.textContent);
    }
});


function handleInput(inputValue) {  
    if (calcDisplay.textContent == 'Try Again') {
        reset();
    }

    if (inputValue.match(/[+*/=-]/)){
        if (inputValue != '=' && operates == '') {operates = inputValue;}
        if (inputValue == '=' && prbSlv) {return;}
        if (number1 == '') {
            number1 = calcDisplay.textContent;
        } else {
            if (operates == '') {return;}
            number2 = calcDisplay.textContent;
            //If operator selected to 3+3+3, then solve the first 3+3, but then keep the operator that was already selected, and set the num1 to the answer, instead of back to ""
            let tempOperator = "";
            let tempNum1 = "";
            console.log(`operates ${operates}, input value ${inputValue}`)
            if (inputValue != '=') { 
                tempOperator = inputValue;
                tempNum1 = operate(number1, operates, number2);
            }
            console.log(`before operate: num1: ${number1} num2: ${number2}, operator: ${operates} counter: ${counter}`);
            calcDisplay.textContent = operate(number1, operates, number2);
            trimDisplay();
            number1 = tempNum1;
            operates = tempOperator;
            number2 = '';  

            console.log(`after operate: num1: ${number1} num2: ${number2}, operator: ${operates} counter: ${counter}`);
        }
        return;
    }

    if (inputValue.match(/[.]/)) {
        if (calcDisplay.textContent.match(/[.]/)) {return;} 
    }

    if (inputValue.match(/[%]/)) {
        calcDisplay.textContent = operate(calcDisplay.textContent, '/', 100);
        trimDisplay();
        prbSlv = false;
        return;
    }

    if (inputValue == 'C') {
        calcDisplay.textContent = 0;
        return;
    }
    
    if (inputValue == 'AC'){
        reset();
        return;
    }
    
    if ((calcDisplay.textContent == 0 || number1 == calcDisplay.textContent) || prbSlv == true) {
        if(counter >= 2) {
            calcDisplay.textContent = number1+inputValue;
            counter = 0;
            return;
        }
        calcDisplay.textContent = inputValue; 
        counter++;
        prbSlv = false; 
        trimDisplay(); 
    }

    else {calcDisplay.textContent += inputValue; trimDisplay();}
}

function reset() {
    calcDisplay.textContent = 0;
    number1 = '';
    number2 = '';
    operates = '';
    counter = 0;
}

function trimDisplay() {
    if (calcDisplay.textContent.length >= 10) {calcDisplay.textContent = calcDisplay.textContent.substring(0,10);}
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
    if (num2===0){return "Try Again"}
    return (num1 / num2);
}

function operate(num1, operator, num2){
    prbSlv = true;
    counter = 1;
    switch (operator) {
        case '+':
            return add(Number(num1), Number(num2));
        case '-':
            return subtract(Number(num1), Number(num2));
        case '/':
            return divide(Number(num1), Number(num2));
        case '*':
            return multiply(Number(num1), Number(num2));
        default: 
            return `Error, operator ${operator} is not recognized`
    }
} 