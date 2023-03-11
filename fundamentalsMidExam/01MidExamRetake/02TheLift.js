function theLift(input) {

    let queue = Number(input.shift());
    let wagons = input.shift().split(' ').map(a => Number(a));
    let peopleIsOver = false;

    for (let i = 0; i < wagons.length; i++) {

        let currentVagon = wagons[i];
        if (queue != 0) {
            if (currentVagon < 4) {
                let freeSpaces = 4 - currentVagon;

                if (queue > freeSpaces) {
                    queue -= freeSpaces;
                    currentVagon += freeSpaces;
                    wagons[i] = currentVagon;
                } else {
                    currentVagon += queue;
                    wagons[i] = currentVagon;
                    queue = 0;
                }
            }
        }

        if (queue == 0) {
            peopleIsOver = true;
            break;
        }
    }

    if (queue != 0) {
        console.log(`There isn't enough space! ${queue} people in a queue!`);
        console.log(wagons.join(' '));
    } else { // chakashtite sa 0

        let noFreeSpaces = true;

        for (const vagon of wagons) {

            if (vagon != 4) {
                noFreeSpaces = false;
                break;
            }
        }

        if (noFreeSpaces) {
            console.log(wagons.join(' '));
        } else {
            console.log('The lift has empty spots!');
            console.log(wagons.join(' '));
        }
    }
}

theLift([
    "20",
    "0 2 0"]);
