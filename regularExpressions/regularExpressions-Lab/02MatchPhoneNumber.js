function matchPhoneNumber(input) {
    let pattern = /\+359([-| ])2\1[0-9]{3}\1[0-9]{4}\b/g;

    let numbers = input[0].match(pattern);

    console.log(numbers.join(', '))
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])