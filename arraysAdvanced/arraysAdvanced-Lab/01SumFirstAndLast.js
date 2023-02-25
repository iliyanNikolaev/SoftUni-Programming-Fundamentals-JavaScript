function sumFirstAndLast(numbers) {

    let firstNumber = Number(numbers.slice(0, 1));
    let lastNumber = Number(numbers.slice(numbers.length - 1));

    let sum = firstNumber + lastNumber;

    console.log(sum);
}

sumFirstAndLast(['5', '10']);