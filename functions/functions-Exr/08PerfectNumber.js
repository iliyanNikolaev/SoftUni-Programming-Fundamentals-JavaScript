function perfectNumber (num) {

    let divisors = [];

    for (let divisor = 1; divisor < num; divisor++) {

        if (num % divisor === 0) {
            divisors.push(divisor);
        }
    }

    let divisorsSum = 0;
    let divisorsCount = divisors.length;

    for (let index = 0; index < divisorsCount; index++) {

        divisorsSum += divisors[index];
    }

    if(divisorsSum === num) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);