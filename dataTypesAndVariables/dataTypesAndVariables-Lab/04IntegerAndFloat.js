function integerAndFloat(firstNum, secondNum, thirdNum) {

    let sum = firstNum + secondNum + thirdNum;

    let resultFromDivide = sum % Math.round(sum);

    let output = '';

    resultFromDivide === 0 ? output = 'Integer' : output = 'Float';

    console.log(`${sum} - ${output}`);
}

integerAndFloat(9, 100, 1.1);