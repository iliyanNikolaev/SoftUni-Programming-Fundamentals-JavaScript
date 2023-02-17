function division(num){
    let divisor = '';

    if (num % 10 === 0){
        divisor = '10';
    } else if (num % 7 === 0) {
        divisor = '7';
    } else if (num % 6 === 0) {
        divisor = '6';
    } else if (num % 3 === 0) {
        divisor = '3';
    } else if (num % 2 === 0) {
        divisor = '2';
    } else {
        divisor = 'Not divisible';
    }

    if (divisor !== 'Not divisible') {

        divisor = `The number is divisible by ${divisor}`;
    } 

    console.log(divisor);

}

division(1643);