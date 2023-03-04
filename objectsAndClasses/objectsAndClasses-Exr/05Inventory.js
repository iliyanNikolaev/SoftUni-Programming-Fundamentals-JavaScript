function inventory(input) {

    let heroesEntries = [];

    for (const line of input) {
        
        let [name, level, items] = line.split(' / ');

        let hero = {
            name: name,
            level: level,
            items: items
        }
        
        let heroEntries = Object.entries(hero);
        
        heroesEntries.push(heroEntries);
    }

    let arr = [];

    for (const line of heroesEntries) {
        let [name, level, items] = line;
        let tempArr = [];
        tempArr.push(name[1]);
        tempArr.push(Number(level[1]));
        tempArr.push(items[1]);

        arr.push(tempArr);
    }

    arr.sort((firstArr, secondArr) => firstArr[1] - secondArr[1]);

    for (const line of arr) {
        
        let [name, level, items] = line;

        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]    
    )