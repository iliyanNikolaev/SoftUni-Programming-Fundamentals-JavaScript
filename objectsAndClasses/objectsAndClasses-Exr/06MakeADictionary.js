function makeDictionary(input) {

    let obj = {};

    for (const line of input) {
        
        let convertedJSON = JSON.parse(line);

        let term = Object.keys(convertedJSON).join('');
        let definition = Object.values(convertedJSON).join('');

        obj[term] = definition;
    }

    let arr = Object.entries(obj).sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const entry of arr) {
        
        console.log(`Term: ${entry[0]} => Definition: ${entry[1]}`)
    }
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )