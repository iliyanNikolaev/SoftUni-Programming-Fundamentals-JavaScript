function magicSum(numbers, searchedSum) {
    for(let i = 0; i < numbers.length; i++){

        for(let j = i + 1; j < numbers.length; j++) {

            let firstNum = numbers[i];
            let secondNum = numbers[j];

            if(firstNum + secondNum === searchedSum){
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);