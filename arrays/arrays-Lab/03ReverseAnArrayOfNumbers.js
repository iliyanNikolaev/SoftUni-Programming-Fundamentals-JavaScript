function reverse(count, numbers){
    let reversedNumbers = [];

    for(let i = count - 1; i >= 0; i--){

        reversedNumbers.push(numbers[i]);
    }

    console.log(reversedNumbers.join(' '));
}

reverse(3, [10, 20, 30, 40, 50]);