function sumEvenNumbers(numbers) {
    let sum = 0;

    for (num of numbers) {

        let currentNum = Number(num);

        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);