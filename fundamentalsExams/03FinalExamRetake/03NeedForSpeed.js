function nfs(input) {

    const carsCount = Number(input.shift());

    let cars = {};

    for (let index = 1; index <= carsCount; index++) {

        let lineArr = input.shift().split('|');

        let carModel = lineArr[0];

        let mileage = Number(lineArr[1]);

        let fuel = Number(lineArr[2]);

        cars[carModel] = {
            mileage: mileage,
            fuel: fuel
        };
    }

    let command = input.shift();

    while (command !== 'Stop') {

        let commandArr = command.split(' : ');

        let action = commandArr[0];
        let carModel = commandArr[1];

        switch (action) {
            case 'Drive':
                let distance = Number(commandArr[2]);
                let neededFuel = Number(commandArr[3]);

                let availableFuel = cars[carModel].fuel;

                if (neededFuel <= availableFuel) {

                    cars[carModel].mileage += distance;
                    cars[carModel].fuel -= neededFuel;
                    console.log(`${carModel} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);

                    if (cars[carModel].mileage >= 100000) {
                        console.log(`Time to sell the ${carModel}!`);

                        delete cars[carModel];
                    }
                } else {
                    console.log('Not enough fuel to make that ride');
                }
                break;
            case 'Refuel':
                let litersFromInput = Number(commandArr[2]);

                let litersAvailable = cars[carModel].fuel;

                let litersNeeded = 75 - litersAvailable;

                let finalLiters = 0;

                if (litersNeeded <= litersFromInput) {
                    cars[carModel].fuel = 75;

                    finalLiters = litersNeeded;
                } else {
                    cars[carModel].fuel += litersFromInput;

                    finalLiters = litersFromInput;
                }

                console.log(`${carModel} refueled with ${finalLiters} liters`);
                break;
            case 'Revert':
                let kilometers = Number(commandArr[2]);

                cars[carModel].mileage -= kilometers;

                if (cars[carModel].mileage < 10000) {
                    cars[carModel].mileage = 10000;
                } else {
                    console.log(`${carModel} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }

        command = input.shift();
    }

    for (const car in cars) {

        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }
}

nfs([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  );