function computerStore(input) {
    const typeClient = input.pop();

    const inputLength = input.length;

    let totalPriceWithoutTaxes = 0;
    let taxes = 0;

    for(let i = 0; i < inputLength; i++) {
        let currentPrice = Number(input[i]);

        if(currentPrice < 0) {
            console.log('Invalid price!');
            continue;
        }

        totalPriceWithoutTaxes += currentPrice;
    }

    taxes = totalPriceWithoutTaxes*0.2;

    if (totalPriceWithoutTaxes === 0) {
        console.log('Invalid order!');
        return;
    }

    let totalPrice = totalPriceWithoutTaxes + taxes;
    
    if(typeClient === 'special') {
        totalPrice *= 0.9;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${(totalPrice).toFixed(2)}$`);
}

computerStore([
    'regular'
    ])
    
    