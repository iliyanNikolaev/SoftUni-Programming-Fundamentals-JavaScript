function rightPlace(firstText, char, secondText) {
    let firstIntoArr = firstText.split('');

    let index = firstIntoArr.indexOf('_');

    firstIntoArr[index] = char;

    let modifiedString = '';

    for (el of firstIntoArr) {
        modifiedString += el;
    }

    let result = '';

    modifiedString === secondText ? result = 'Matched' : result = 'Not Matched';

    console.log(result);
}

rightPlace('Str_ng', 'i', 'String');