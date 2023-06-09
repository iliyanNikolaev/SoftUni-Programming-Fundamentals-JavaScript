function solve(input) {
    let health = 100;
    let coins = 0;
    let isDied = false;

    const dungeons = input.split('|');

    for (let i = 0; i < dungeons.length; i++) {
        const dungeon = dungeons[i];
        const [action, num] = dungeon.split(' ');

        switch (action) {
            case 'potion':
                const healthIncrease = Number(num);
                health += healthIncrease;
                let currentIncrease = 0;
                if (health > 100) {
                    const unneccesaryHealth = health - 100;
                    currentIncrease = healthIncrease-unneccesaryHealth;
                    health = 100;
                } else {
                    currentIncrease = healthIncrease;
                }

                console.log(`You healed for ${currentIncrease} hp.\nCurrent health: ${health} hp.`);
                break;
            case 'chest':
                const currentCoins = Number(num);

                coins += currentCoins;

                console.log(`You found ${currentCoins} bitcoins.`);
                break;
            default:
                const bossPower = Number(num);

                health -= bossPower;

                if (health > 0) {
                    console.log(`You slayed ${action}.`);
                } else {
                    console.log(`You died! Killed by ${action}.\nBest room: ${++i}`);
                    isDied = true;
                }
                break;
        }

        if (isDied) {
            break;
        }
    }

    if (!isDied) {
        console.log(`You've made it!\nBitcoins: ${coins}\nHealth: ${health}`);
    }
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")