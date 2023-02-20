function sumDigits(num) {
    let numStr = num.toString();

    let numStrLength = numStr.length;

    let sum = 0;

    for (let i = 0; i < numStrLength; i++) {
        let currDigit = Number(numStr[i]);

        sum += currDigit;
    }

    console.log(sum);
}

sumDigits(245678);