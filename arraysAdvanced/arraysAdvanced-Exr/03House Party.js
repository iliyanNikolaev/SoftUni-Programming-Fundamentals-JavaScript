function houseParty (input) {
    let listOfGuests = [];

    for(let i = 0; i < input.length; i++) {
        
        let command = input[i];

        let commandArr = command.split(' ');

        let name = commandArr[0];

        switch (commandArr[2]) {
            case 'going!':
                if(!listOfGuests.includes(name)) {
                    listOfGuests.push(name);
                } else {
                    console.log(`${name} is already in the list!`)
                }
                break;

            case 'not':
                if(listOfGuests.includes(name)) {
                    let index = listOfGuests.indexOf(name);

                    listOfGuests.splice(index, 1);
                } else {
                    console.log(`${name} is not in the list!`)
                }
                break;
        }
    }

    console.log(listOfGuests.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)