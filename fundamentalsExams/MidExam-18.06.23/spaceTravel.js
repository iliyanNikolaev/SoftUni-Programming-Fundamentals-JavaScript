function solve(input) {
    const routes = input.shift().split('||');

    let fuel = Number(input.shift());

    let ammo = Number(input.shift());

    let command = routes.shift();

    while (command != 'Titan') {
        const props = command.split(' ');

        const action = props[0];

        switch (action) {
            case 'Travel':
                const lightYears = Number(props[1]);

                if (fuel - lightYears >= 0) {
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                    fuel -= lightYears;
                } else {
                    return console.log('Mission failed.');
                }
                break;
            case 'Enemy':
                const enemyArmour = Number(props[1]);

                if (ammo - enemyArmour >= 0) {
                    console.log(`An enemy with ${enemyArmour} armour is defeated.`);
                    ammo -= enemyArmour;
                } else {

                    if (fuel - enemyArmour * 2 >= 0) {
                        console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
                        fuel -= enemyArmour * 2;
                    } else {
                        return console.log('Mission failed.');
                    }
                }
                break;
            case 'Repair':
                const addedAmount = Number(props[1]);

                fuel += addedAmount;
                ammo += addedAmount*2;

                console.log(`Ammunitions added: ${addedAmount*2}.`);
                console.log(`Fuel added: ${addedAmount}.`);
                break;
        }

        command = routes.shift();
    }

    console.log('You have reached Titan, all passengers are safe.');
}

solve([ 'Travel 10||Enemy 30||Repair 15||Titan',

'50',

'80' ]);