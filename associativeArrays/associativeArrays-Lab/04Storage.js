function storage(input) {
    let storage = new Map();

    for (const line of input) {
        let [product, quantity] = line.split(' ');

        if(!storage.has(product)) {
            storage.set(product, Number(quantity));
        } else {
            let oldValue = storage.get(product);
            oldValue+=Number(quantity);

            storage.set(product, oldValue);
        }
    }

    let storageEntries = storage.entries();

    for (const entry of storageEntries) {
        
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)