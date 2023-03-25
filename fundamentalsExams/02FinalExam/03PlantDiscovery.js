function plantDiscovery(input) {

    let count = Number(input.shift());

    let plants = {};

    for (let i = 0; i < count; i++) {
        let line = input.shift();

        let [name, rarity] = line.split('<->');


        plants[name] = {
            rarity: rarity,
            ratings: []
        }
    }

    let command = input.shift();

    while (command !== 'Exhibition') {
        let [action, tokens] = command.split(': ');

        switch (action) {
            case 'Rate':
                let [ratePlantName, rating] = tokens.split(' - ');
                if (!plants.hasOwnProperty(ratePlantName)) {
                    console.log('error')
                } else {
                    plants[ratePlantName].ratings.push(Number(rating));
                }
                break;
            case 'Update':
                let [updatePlantName, rarity] = tokens.split(' - ');
                if (!plants.hasOwnProperty(updatePlantName)) {
                    console.log('error')
                } else {
                    plants[updatePlantName].rarity = rarity;
                }
                break;
            case 'Reset':
                let resetPlantName = tokens;
                if (!plants.hasOwnProperty(resetPlantName)) {
                    console.log('error')
                } else {
                    plants[resetPlantName].ratings = [];
                }
                break;
        }

        command = input.shift();
    }

    console.log('Plants for the exhibition:');

    plantsEntries = Object.entries(plants);

    for (const plant of plantsEntries) {
        let plantName = plant[0];
        let rariry = plant[1].rarity;
        let ratings = plant[1].ratings;

        let avgRating = avg(ratings);

        console.log(`- ${plantName}; Rarity: ${rariry}; Rating: ${avgRating.toFixed(2)}`);
    }

    function avg(arr) {

        let total = 0;

        if (arr.length === 0) {
            return 0;
        } else {

            arr.forEach(el => total += el);

            let avgRating = total / arr.length;

            return avgRating;
        }
    }
}

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
