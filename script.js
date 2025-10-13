let displayValue='0';
let firstOperand=null;
let operator=null;
let waitingForSecondOperand = false;

// DOM is a tree like representation in html document
// every html tag is a node or element
const updateDisplay = () => {
    const display = document.getElementById('display');
    display.textContent = displayValue;
};
updateDisplay();