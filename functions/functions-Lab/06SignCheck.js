function signCheckThreeNums(firstNum, secondNum, thirdNum) {

    let result = signCheckTwoNums(signCheckTwoNums(firstNum, secondNum), thirdNum);

    if(result < 0) {
        return 'Negative';
    } else {
        return 'Positive';
    }

    function signCheckTwoNums(firstNum, secondNum) {

        if(firstNum < 0 && secondNum >= 0 || firstNum >= 0 && secondNum < 0) {
            return -1;
        } else {
            return 1;
        }
    }
}

console.log(signCheckThreeNums(-6, -12, 14));