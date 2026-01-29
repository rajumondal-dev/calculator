function add(a,b){
    return Number(a)+Number(b);
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let firstNumber = '';
let secondNumber = '';
let operator = '';
let isResultDisplayed = false;

function operate(operator, firstNumber, secondNumber) {
    let result;
    switch(operator){
        case ('+') :
            result = add(firstNumber,secondNumber);
            if(Number.isInteger(result) === false){
                return result.toFixed(2)
            }else{
                return result;
            }
        case ('-') :
            result = subtract(firstNumber,secondNumber);
            if(Number.isInteger(result) === false){
                return result.toFixed(2)
            }else{
                return result;
            }
        case ('*') :
            result = multiply(firstNumber,secondNumber);
            if(Number.isInteger(result) === false){
                return result.toFixed(2)
            }else{
                return result;
            }
        case ('/') :
            if(secondNumber === '0'){
                return "Idiot"
            }
            result = divide(firstNumber,secondNumber);
            if(Number.isInteger(result) === false){
                return result.toFixed(2)
            }else{
                return result;
            }
    }
}

let display = document.querySelector('.display');
let numberKeys = document.querySelectorAll('.number-key');
let operatorKeys = document.querySelectorAll('.operator-key');
let equalKey = document.querySelector('#equal');
let clearKey = document.querySelector('#clear');
let allClearKey = document.querySelector('#all-clear');

numberKeys.forEach((button) =>{
    button.addEventListener('click',()=>{
        if(display.textContent === 'Idiot'){
            resetCalculator();
        }

        if(isResultDisplayed && operator === ''){
            firstNumber = '';
            isResultDisplayed = false;
        }

        if(operator === ''){
            if (button.textContent === '.' && firstNumber.includes('.')) return;
            firstNumber += button.textContent;
            display.textContent = firstNumber;
        }else{
            if (button.textContent === '.' && secondNumber.includes('.')) return;
            secondNumber += button.textContent;
            display.textContent = secondNumber;
        }
    })
})

operatorKeys.forEach((button) =>{
    button.addEventListener('click',()=>{
        if(firstNumber !== '' && secondNumber !== '' && operator !== ''){
            firstNumber = operate(operator,firstNumber,secondNumber);
            display.textContent = firstNumber;
            secondNumber = '';
            
        }
        operator = button.textContent;
        isResultDisplayed = false;
    })
})

equalKey.addEventListener('click',()=>{
    if(firstNumber !== '' && secondNumber !== '' && operator !== ''){
        firstNumber = operate(operator,firstNumber,secondNumber);
        display.textContent = firstNumber;
        secondNumber = '';
        operator = '';
        isResultDisplayed = true;
    }
})

function resetCalculator() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '0';
}
allClearKey.addEventListener('click',resetCalculator);

clearKey.addEventListener('click',()=>{
    if(operator === ''){
        firstNumber = firstNumber.slice(0,-1);
        display.textContent = firstNumber || 0;
    }else if(operator !== ''){
        secondNumber = secondNumber.slice(0,-1);
        display.textContent = secondNumber || 0;
    }
})