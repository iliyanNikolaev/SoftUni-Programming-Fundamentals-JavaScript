function calculator(firstNum, secondNum, operator) {

    let multiply = (firstNum, secondNum) => firstNum * secondNum;

    let divide = (firstNum, secondNum) => firstNum / secondNum;

    let add = (firstNum, secondNum) => firstNum + secondNum;

    let subtract = (firstNum, secondNum) => firstNum - secondNum;

    switch (operator) {
        case 'multiply': return multiply(firstNum, secondNum);
        case 'divide': return divide(firstNum, secondNum);
        case 'add': return add(firstNum, secondNum);
        case 'subtract': return subtract(firstNum, secondNum);
    }
}

console.log(calculator(5, 5, 'multiply'));