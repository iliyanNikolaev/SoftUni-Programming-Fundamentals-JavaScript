function solve(input) {
    const heroesCount = Number(input.shift());
    const heroes = {

    };

    for (let i = 1; i <= heroesCount; i++) {
        const [name, HP, MP] = input.shift().split(' ');

        heroes[name] = {
            HP: Number(HP),
            MP: Number(MP)
        };
    }

    let command = input.shift();

    while (command !== 'End') {
        const actions = command.split(' - ');

        switch (actions[0]) {
            case 'CastSpell':
                let [castSpell, spelledHero, MpNeeded, spellName] = actions;
                MpNeeded = Number(MpNeeded);

                if (heroes[spelledHero].MP >= MpNeeded) {
                    heroes[spelledHero].MP -= MpNeeded;

                    console.log(`${spelledHero} has successfully cast ${spellName} and now has ${heroes[spelledHero].MP} MP!`);
                } else {
                    console.log(`${spelledHero} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let [TakeDamage, damagedHero, damage, attacker] = actions;
                damage = Number(damage);

                if (heroes[damagedHero].HP - damage > 0) {
                    heroes[damagedHero].HP -= damage;

                    console.log(`${damagedHero} was hit for ${damage} HP by ${attacker} and now has ${heroes[damagedHero].HP} HP left!`)
                } else {
                    console.log(`${damagedHero} has been killed by ${attacker}!`);
                    delete heroes[damagedHero];
                }
                break;
            case 'Recharge':
                let [recharge, rechargedHero, ammountMP] = actions;
                ammountMP = Number(ammountMP);
                let ammountRecovered = 0;

                if (heroes[rechargedHero].MP + ammountMP <= 200) {
                    heroes[rechargedHero].MP += ammountMP;
                    ammountRecovered = ammountMP;
                } else {
                    ammountRecovered = 200 - heroes[rechargedHero].MP;

                    heroes[rechargedHero].MP = 200;
                }

                console.log(`${rechargedHero} recharged for ${ammountRecovered} MP!`);

                break;
            case 'Heal':
                let [heal, healedHero, ammountHP] = actions;
                ammountHP = Number(ammountHP);
                let ammountHealed = 0;

                if (heroes[healedHero].HP + ammountHP <= 100) {
                    heroes[healedHero].HP += ammountHP;
                    ammountHealed = ammountHP;
                } else {
                    ammountHealed = 100 - heroes[healedHero].HP;
                    heroes[healedHero].HP = 100;
                }

                console.log(`${healedHero} healed for ${ammountHealed} HP!`);
                break;
        }

        command = input.shift();
    }

    for (const hero in heroes) {
        console.log(`${hero}`);
        console.log(`  HP: ${heroes[hero].HP}`);
        console.log(`  MP: ${heroes[hero].MP}`);
    }
}

solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);