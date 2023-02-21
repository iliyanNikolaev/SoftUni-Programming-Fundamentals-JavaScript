function condenseArray(numbers) {
    let condensedArr = [];

    while(numbers.length > 1) {

        for(let i = 0; i < numbers.length - 1; i++) {

            condensedArr[i] = numbers[i] + numbers[i + 1];
        }

        numbers = condensedArr;
        condensedArr = [];
    }

    console.log(numbers[0]);
}

condenseArray([2,10,3]);