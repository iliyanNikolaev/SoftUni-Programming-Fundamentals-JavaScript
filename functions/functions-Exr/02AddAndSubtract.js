function addAndSubstract (firstNum, secondNum, thirdNum) {

    const sum = (firstNum, secondNum) => firstNum + secondNum;

    const subtract = (sum, thirdNum) => sum - thirdNum;

    let result = subtract(sum(firstNum, secondNum), thirdNum);
    
    console.log(result)
}

addAndSubstract (23, 6, 10);