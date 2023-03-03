function theLift(input) {
    let queue = Number(input[0]);

    let wagons = input[1].split(' ').map(Number);

    let peopleOver = false;


    for (let i = 0; i < wagons.length; i++) {
        let currentWagon = wagons[i];

        let availableSpaces = 0;

        if (queue > 4) {
            availableSpaces = 4 - currentWagon;
        } else {
            availableSpaces = queue - currentWagon;
        }

        wagons[i] += availableSpaces;
        queue -= availableSpaces;

        if (queue === 0) {
            peopleOver = true;
            queue = 0;
            break;
        }
    }

    let haveFreeSpaces = false;

    for (const wagon of wagons) {
        if (wagon < 4) {
            haveFreeSpaces = true;
            break;
        }
    }

    if (peopleOver && haveFreeSpaces) {
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));
    }

    if (peopleOver && !haveFreeSpaces) {
        console.log(wagons.join(' '));
    } else if (!peopleOver) {
        console.log(`There isn't enough space! ${queue} people in a queue!`);
        console.log(wagons.join(' '));
    }
}

theLift([
    "3",
    "0 0 0 0 0"
   ]   
)
   