function addAndSubstract(inputNumbers) {

    let modifiedNumbers = [];

    let inputNumbersSum = 0;

    let modifiedNumbersSum = 0;

    for (let i = 0; i < inputNumbers.length; i++) {

        let currNum = inputNumbers[i];

        inputNumbersSum += currNum;

        if (currNum % 2 === 0) {
            currNum += i;
        } else {
            currNum -= i;
        }

        modifiedNumbers.push(currNum);
        modifiedNumbersSum += currNum;
    }

    console.log(modifiedNumbers);
    console.log(inputNumbersSum);
    console.log(modifiedNumbersSum);
}

addAndSubstract([5, 15, 23, 56, 35]);