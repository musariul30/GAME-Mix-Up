let expression = '';

function append(value) {
    expression += value;
    document.getElementById('result').value = expression;
}

function calculate() {
    let result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
}