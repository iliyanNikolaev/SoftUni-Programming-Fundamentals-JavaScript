function heartDelivery(input) {
    let houses = input.shift().split('@').map(Number);

    let command = input.shift();

    let position = 0;

    while(command !== 'Love!') {

        let commandArr = command.split(' ');

        let positionIncrease = Number(commandArr[1]);

        position += positionIncrease;

        if(position >= houses.length) {
            position = 0;
        }

        if (houses[position] === 0) {
            console.log(`Place ${position} already had Valentine's day.`);
        } else {
            houses[position] -= 2;

            if(houses[position] === 0) {
                console.log(`Place ${position} has Valentine's day.`);
            }
        }
        

        command = input.shift();
    }

    console.log(`Cupid's last position was ${position}.`);

    let counter = 0;

    for(let house of houses) {

        if(house !== 0) {
            counter++;
        }
    }

    if(counter === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${counter} places.`);
    }
}


heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])


