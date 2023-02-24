function palindromeIntegers (arrayOfNumbers) {

    let arrayLength = arrayOfNumbers.length;
    for(let i = 0; i < arrayLength; i++) {

        let currNum = arrayOfNumbers[i];

        let reversedNum = currNum.splice();

        console.log(reversedNum);
    } 
    
}

palindromeIntegers([123,323,421,121]);