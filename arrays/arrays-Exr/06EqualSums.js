function equalSums(numbers) {

    let isFound = false;
    let index = 'no';

    for(let i = 0; i < numbers.length; i++) {

        let sumLeft = 0;
        let sumRight = 0;


        for(let left = i - 1; left >= 0; left--) {

            let leftNum = numbers[left];

            sumLeft += leftNum;
        }

        for(let right = i + 1; right < numbers.length; right++) {

            let rightNum = numbers[right];

            sumRight += rightNum;
        }

        if(sumLeft === sumRight) {
            isFound = true;
            index = `${i}`;
            break;
        }
    }

    console.log(index);
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);