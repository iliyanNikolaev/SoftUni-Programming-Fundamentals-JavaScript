function firstAndLastKElements(input) {

    let countElements = input.shift();

    let firstElements = input.slice(0, countElements);

    let lastElements = input.slice(input.length - countElements);

    console.log(firstElements.join(' '));

    console.log(lastElements.join(' '));
}

firstAndLastKElements([3, 6, 7, 8, 9]);
    