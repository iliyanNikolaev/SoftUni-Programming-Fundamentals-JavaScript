function processOddNumbers(numbers) {

    let result = numbers
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse();

    console.log(result.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);