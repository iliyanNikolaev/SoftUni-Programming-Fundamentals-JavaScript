function solve(input) {
    
    let storeMap = new Map();
    
    for (const line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        if(storeMap.has(product)){
            quantity += storeMap.get(product);
        }

        storeMap.set(product, quantity);
    }

    for (const entry of storeMap.entries()) {
        
        console.log(`${entry[0]} -> ${entry[1]}`)
    }
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)