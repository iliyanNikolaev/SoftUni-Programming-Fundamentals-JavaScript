function maxNumber(numbers) {
    let result = '';

    for (let i = 0; i < numbers.length; i++) {

        let firstElement = numbers[i];
        let isNotMax = false;
        for (let j = i + 1; j < numbers.length; j++) {

            let secondElement = numbers[j];

            if (firstElement <= secondElement) {

                isNotMax = true;
                break;
            }
        }

        if (!isNotMax) {

            result += `${firstElement} `;
        }
    }

    console.log(result);
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);