function train(input) {
    let wagons = input.shift().split(' ').map(Number);

    let maxCapacity = Number(input.shift());

    for(let i = 0; i < input.length; i++) {
        let command = input[i];
        
        let commandArr = command.split(' ');

        switch(commandArr[0]) {
            case 'Add':
                let passangers = Number(commandArr[1]); 
                wagons.push(passangers);
                break;
            
            default: 
                for(let j = 0; j < wagons.length; j++) {

                    let passangers = Number(commandArr[0]);

                    if (wagons[j] + passangers <= maxCapacity) {
                        wagons[j] = wagons[j] + passangers;
                        break;
                    }
                }
                break;
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);