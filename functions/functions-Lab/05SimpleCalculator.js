function calculator(firstNum, secondNum, operator) {

    const multiply = (firstNum, secondNum) => firstNum * secondNum;

    const divide = (firstNum, secondNum) => firstNum / secondNum;

    const add = (firstNum, secondNum) => firstNum + secondNum;

    const subtract = (firstNum, secondNum) => firstNum - secondNum;

    switch (operator) {
        case 'multiply': return multiply(firstNum, secondNum);
        case 'divide': return divide(firstNum, secondNum);
        case 'add': return add(firstNum, secondNum);
        case 'subtract': return subtract(firstNum, secondNum);
    }
}

console.log(calculator(5, 5, 'multiply'));