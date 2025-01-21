const display = document.getElementById('calc-display');

const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'clear') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(button, value);
        } else {
            appendValue(value);
        }
    });
});

function appendValue(value) {
    currentInput += value;
    updateDisplay(currentInput);
    clearOperatorHighlight();
}

function setOperator(button, op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    highlightOperator(button);
}

function calculateResult() {
    if (currentInput === '' || previousInput === '' || operator === '') return;
    const result = eval(`${previousInput} ${operator} ${currentInput}`);
    updateDisplay(result);
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    clearOperatorHighlight();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
    clearOperatorHighlight();
}

function updateDisplay(value) {
    display.value = value;
}

function highlightOperator(button) {
    clearOperatorHighlight();
    button.classList.add('selected');
}

function clearOperatorHighlight() {
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(btn => btn.classList.remove('selected'));
}
