function solve(number, bit) {

    let decimal = number;
    let arr = [];

    while(decimal > 0) {

        let remainder = decimal % 2;

        arr.push(remainder);
        
        decimal = Math.trunc(decimal / 2);
    }

    let binaryNumArr = arr.reverse();

    let str = '';
    let counterBits = 0;

    for (const el of binaryNumArr) {
        
        str += `${el}`;

        if(el === bit) {
            counterBits++;
        }    
    }

    let bitWord = '';
    
    switch(bit) {
        case 0: bitWord = 'zeroes'; break;
        case 1: bitWord = 'ones'; break;
    }

    console.log(`${number} -> ${str}`);
    console.log(`We have ${counterBits} ${bitWord}.`);
}

solve(20, 0)


function solveExmp(number, digit) {
    
    let decimal = number;
    let counter = 0;

    while(decimal > 0) {

        let remainder = decimal % 2;

        if(remainder === digit){
            counter++;
        }
        
        decimal = Math.trunc(decimal / 2);
    }

    console.log(counter)
}

solveExmp(20, 0)