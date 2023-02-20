function primeNumCheck(num){

    let isPrime = true;

    for(let divisor = 2; divisor < num; divisor++) {
        
        if(num % divisor === 0){
            isPrime = false;
            break;
        }
    }

    isPrime ? console.log(isPrime) : console.log(isPrime);
}

primeNumCheck(81);