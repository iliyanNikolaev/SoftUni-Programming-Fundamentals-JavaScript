function piccolo(input) {
    let parking = {};

    for (const line of input) {
        let [direction, carNumber] = line.split(', ');

        switch (direction) {
            case 'IN':
                parking[carNumber] = direction;
                break;
            case 'OUT':
                delete parking[carNumber];
                break;
        }
    }

    let parkingEntries = Object.entries(parking);

    parkingEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const entry of parkingEntries) {

        console.log(entry[0]);
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)