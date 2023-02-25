function bombNumbers(array, bomb) {
    
    let bombNumber = bomb[0];

    let bombRadius = bomb[1];

    let index = array.indexOf(bombNumber);

    while(index !== -1) {

        let bombRange = bombRadius*2 + 1;

        let startIndex = Math.max(index - bombRadius, 0);

        array.splice(startIndex, bombRange);
        
        index = array.indexOf(bombNumber);
    }

    let sum = 0;

    for(let num of array) {
        sum += num;
    }

    console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]              
    );