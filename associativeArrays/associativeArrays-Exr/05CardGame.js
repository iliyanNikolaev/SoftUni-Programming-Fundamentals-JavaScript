function cardGame(input) {
    let obj = {};

    for (const line of input) { 

        let [name, cardsStr] = line.split(': ');

        let cardsArr = cardsStr.split(', ');

        if (!obj.hasOwnProperty(name)) {
            obj[name] = cardsArr;
        } else {
            let concatArr = obj[name].concat(cardsArr);

            obj[name] = concatArr;
        }

    }

    let objEntries = Object.entries(obj);

    let objUniqueCards = {};

    for (const entry of objEntries) { 
        let uniqueCards = [];

        for (const card of entry[1]) {
            if (uniqueCards.includes(card)) {
                continue;
            }

            uniqueCards.push(card);
        }

        objUniqueCards[entry[0]] = uniqueCards;
    }

    let objUniqueCardsEntries = Object.entries(objUniqueCards);
    let finalObject = {};

    for (const entry of objUniqueCardsEntries) {
        let totalPoints = 0;

        for (const card of entry[1]) {
            let splitedCard = card.split('');
            let power = '';
            let type = '';

            if (splitedCard.length === 3) {
                power = splitedCard[0] + splitedCard[1];
                type = splitedCard[2];
            } else {
                power = splitedCard[0];
                type = splitedCard[1];
            }

            let num = 0;
            let multiplyer = 0;

            switch (power) {
                case '2': num = 2; break;
                case '3': num = 3; break;
                case '4': num = 4; break;
                case '5': num = 5; break;
                case '6': num = 6; break;
                case '7': num = 7; break;
                case '8': num = 8; break;
                case '9': num = 9; break;
                case '10': num = 10; break;
                case 'J': num = 11; break;
                case 'Q': num = 12; break;
                case 'K': num = 13; break;
                case 'A': num = 14; break;
            }

            switch (type) {
                case 'S': multiplyer = 4; break;
                case 'H': multiplyer = 3; break;
                case 'D': multiplyer = 2; break;
                case 'C': multiplyer = 1; break;
            }

            totalPoints += (num * multiplyer);
        }

        finalObject[entry[0]] = totalPoints;
    }

    for (const key in finalObject) {
        console.log(`${key}: ${finalObject[key]} `);
    }
}

cardGame(
    [
        'John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD'
    ]
)