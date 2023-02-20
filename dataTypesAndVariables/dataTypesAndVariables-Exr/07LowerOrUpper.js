function lowerOrUpper(letter){
    let letterToUpper = letter.toUpperCase();

    let output = '';

    letter === letterToUpper ? output = 'upper-case' : output = 'lower-case';

    console.log(output);
}

lowerOrUpper('A');