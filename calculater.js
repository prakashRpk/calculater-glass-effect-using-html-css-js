let input = '';

function appendNumber(number) {
    input += number;
    updateInput();
}

function addOperator(operator) {
    input += operator;
    updateInput();
}

function clearInput() {
    input = '';
    updateInput();
}

function updateInput() {
    document.getElementById('input').value = input;
}

function calculate() {
    try {
        const result = eval(input);
        input = result.toString();
        updateInput();
    } catch (error) {
        input = 'Error';
        updateInput();
    }
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', 
        'Enter', 'Backspace'].includes(key)) {
        event.preventDefault();
        if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            input = input.slice(0, -1);
            updateInput();
        } else {
            appendNumber(key);
        }
    }
});
