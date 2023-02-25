function negativeOrPositive(numbers) {

    let resultArray = [];

    for(let i = 0; i < numbers.length; i++) {

        let currentNum = Number(numbers[i]);

        if (currentNum < 0) {
            resultArray.unshift(currentNum);
        } else {
            resultArray.push(currentNum);
        }
    }

    console.log(resultArray.join('\n'));
}

negativeOrPositive(['7', '-2', '8', '9']);