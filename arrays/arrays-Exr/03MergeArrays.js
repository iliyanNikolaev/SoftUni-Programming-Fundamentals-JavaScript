function mergeArrays(firstArr, secondArr) {

    let mergedArr = [];

    for (let i = 0; i < firstArr.length; i++) {

        let firstNumStr = firstArr[i];
        let secondNumStr = secondArr[i];

        if (i % 2 === 0) {

            let firstNum = Number(firstNumStr);
            let secondNum = Number(secondNumStr);
            mergedArr.push(firstNum + secondNum);

        } else {

            mergedArr.push(firstNumStr + secondNumStr);
        }
    }

    console.log(mergedArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
