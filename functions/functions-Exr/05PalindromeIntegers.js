function palindromeIntegers (arrayOfNumbers) {

    let arrayLength = arrayOfNumbers.length;
    for(let i = 0; i < arrayLength; i++) {

        let currNum = arrayOfNumbers[i].toString();

        let reversedNum = currNum.split('').reverse().join('');

        if(currNum === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    } 
}

palindromeIntegers([123,323,421,121]);