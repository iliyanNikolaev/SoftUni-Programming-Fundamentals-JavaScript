function smallestTwoNums(numbers) {
    let result = numbers
        .sort((a, b) => a - b)
        .slice(0, 2);

    console.log(result.join(' '));
}

smallestTwoNums([30, 15, 50, 5]);