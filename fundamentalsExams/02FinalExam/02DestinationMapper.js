function destinationMapper(str) {
    let pattern = /([=]|[\/])(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g

    let destinations = [];

    let match = pattern.exec(str);
    
    while (match !== null) {

        destinations.push(match.groups.destination);

        match = pattern.exec(str);
    }

    let travelPoints = 0;

    destinations.forEach(d => travelPoints += d.length);

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("ThisIs some InvalidInput");