function partyTime(input) {
    let vip = [];
    let regular = [];

    let guest = input.shift();

    while(guest !== 'PARTY'){

        if(isNaN(guest[0])) {
            regular.push(guest);
        } else {
            vip.push(guest);
        }

        guest = input.shift();
    }

    let allGuests = vip.concat(regular);

    for (const line of input) {
        
        if(allGuests.includes(line)) {

            allGuests.splice(allGuests.indexOf(line), 1);
        }
    }

    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
}

partyTime(
['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']
);