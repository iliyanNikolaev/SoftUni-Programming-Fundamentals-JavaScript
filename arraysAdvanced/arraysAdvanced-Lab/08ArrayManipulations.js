function arrayManipulations(input) {
    let numbers = input
        .shift(input[0])
        .split(' ');

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i];

        let currentRowAsArray = currentRow.split(' ');

        let command = currentRowAsArray[0];

        switch (command) {

            case 'Add':
                numbers.push(currentRowAsArray[1]);
                break;

            case 'Remove':
                let filteredNums = numbers.filter(num => num != currentRowAsArray[1]);

                numbers = filteredNums;
                break;

            case 'RemoveAt':
                let removeIndex = Number(currentRowAsArray[1]);

                numbers.splice(removeIndex, 1);
                break;

            case 'Insert':

                let number = currentRowAsArray[1];
                let addIndex = Number(currentRowAsArray[2]);

                numbers.splice(addIndex, 0, number);
                break;
        }
    }

    console.log(numbers.join(' '));
}

arrayManipulations([
    '6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
]);