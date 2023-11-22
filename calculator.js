var result = document.getElementById('result');
    var num1 = '';
    var num2 = '';
    var operator = '';

    function append(value) {
        if (operator === '') {
            num1 += value;
            result.value = num1;
        } else {
            num2 += value;
            result.value = num2;
        }
    }

    function add() {
        operator = '+';
        num1 = parseFloat(num1);
        num2 = '';
        result.value = '';
    }

    function subtract() {
        operator = '-';
        num1 = parseFloat(num1);
        num2 = '';
        result.value = '';
    }

    function multiply() {
        operator = '*';
        num1 = parseFloat(num1);
        num2 = '';
        result.value = '';
    }

    function divide() {
        operator = '/';
        num1 = parseFloat(num1);
        num2 = '';
        result.value = '';
    }

    function equal() {
        num2 = parseFloat(num2);
        if (operator === '+') result.value = num1 + num2;
        else if (operator === '-') result.value = num1 - num2;
        else if (operator === '*') result.value = num1 * num2;
        else if (operator === '/') result.value = num1 / num2;
    }

    function clearResult() {
        result.value = '';
        num1 = '';
        num2 = '';
        operator = '';
    }

    function deleteOne() {
        if (operator === '') {
            num1 = num1.slice(0, -1);
            result.value = num1;
        } else {
            num2 = num2.slice(0, -1);
            result.value = num2;
        }
    }