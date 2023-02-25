function sorting(numbers) {

    let copyNumbers = numbers.slice().sort((a, b) => a - b);

    let resultArr = [];

    for (let i = 0; i < numbers.length; i++) {

        if (i % 2 === 0) {
            let lastElement = copyNumbers.pop();

            resultArr.push(lastElement);
        } else {
            let firstElement = copyNumbers.shift();

            resultArr.push(firstElement);

        }
    }

    console.log(resultArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);