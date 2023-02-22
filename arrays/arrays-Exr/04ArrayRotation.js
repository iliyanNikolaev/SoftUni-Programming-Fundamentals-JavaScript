function arrayRotation(numbers, rotations) {
    
    for (let i = 1; i <= rotations; i++) {

        let element = numbers.shift();

        numbers.push(element);
    }

    console.log(numbers.join(' '));
}

arrayRotation([32, 21, 61, 1], 4);