function oddAndEvenSum (number) {

    let numberAsString = number.toString();

    let numberAsStringLength = numberAsString.length;

    let evenSum = 0;
    let oddSum = 0;

    for(let index = 0; index < numberAsStringLength; index++) {
        
        let currentDiggit = Number(numberAsString[index]);

        if (currentDiggit % 2 === 0) {
            evenSum += currentDiggit;
        } else {
            oddSum += currentDiggit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);