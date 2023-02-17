function sumOddNumbers(countNums) {
    let sum = 0;

    let counter = 0;

    let i = 1;

    while (counter < countNums) {
        console.log(i);

        sum += i;

        counter++;
        i += 2;
    }

    console.log(`Sum: ${sum}`);
}

sumOddNumbers(5);