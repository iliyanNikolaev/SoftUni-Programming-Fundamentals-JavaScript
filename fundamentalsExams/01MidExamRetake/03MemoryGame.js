function memoryGame(input) {
    let sequence = input.shift().split(' ');

    let command = input.shift();

    let movesCount = 0;

    while (command !== 'end') {

        movesCount++;

        let [firstIndex, secondIndex] = command.split(' ').map(a => Number(a));

        let indexesAreEqual = firstIndex === secondIndex;
        let indexOutOfRange = (firstIndex < 0 || secondIndex < 0) || (firstIndex >= sequence.length || secondIndex >= sequence.length);

        if (indexOutOfRange || indexesAreEqual) {
            let avgIndex = (sequence.length / 2);
            let elementForAdd = `-${movesCount}a`;

            console.log('Invalid input! Adding additional elements to the board');
            sequence.splice(avgIndex, 0, elementForAdd, elementForAdd);
            
            command = input.shift();
            continue;
        }

        if (!indexesAreEqual && !indexOutOfRange && sequence[firstIndex] !== sequence[secondIndex]) {
            console.log('Try again!');
            
            command = input.shift();
            continue;
        }

        if (sequence[firstIndex] === sequence[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`)
            let elementForDelete = sequence[firstIndex];
            sequence.splice(firstIndex, 1);
            sequence.splice(sequence.indexOf(elementForDelete), 1);

            if (sequence.length === 0) {
                console.log(`You have won in ${movesCount} turns!`);
                break;
            }
            
            command = input.shift();
            continue;
        }

        command = input.shift();
    }

    if (sequence.length !== 0) {
        console.log('Sorry you lose :(');
    }

    console.log(sequence.join(' '));
}

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]      
);