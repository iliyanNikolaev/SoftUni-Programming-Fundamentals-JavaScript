function storeProvision(storage, delivery) {

    const storedProducts = {};

    const storageLength = storage.length;

    for (let i = 0; i < storageLength; i += 2) {

        const product = storage.shift();
        const quantity = Number(storage.shift());

        storedProducts[product] = quantity;
    }

    const deliveryLength = delivery.length;

    for (let i = 0; i < deliveryLength; i += 2) {
        const product = delivery.shift();
        const quantity = Number(delivery.shift());

        if (!storedProducts.hasOwnProperty(product)) {
            storedProducts[product] = 0;
        }

        storedProducts[product] += quantity;
    }

    for (const product in storedProducts) {

        console.log(`${product} -> ${storedProducts[product]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)