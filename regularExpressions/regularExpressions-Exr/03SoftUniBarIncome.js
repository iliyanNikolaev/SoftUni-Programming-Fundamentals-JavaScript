function softuniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<qty>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|0-9\.0-9]+)\$/g;

    let index = 0;

    let totalIncome = 0;

    while(input[index] !== 'end of shift') {

        let line = input[index];

        let data = pattern.exec(line);

        while(data !== null) {
            let name = data.groups['name'];
            let product = data.groups['product'];
            let qty = Number(data.groups['qty']);
            let price = Number(data.groups['price']);
            
            let currentPrice = qty*price;

            totalIncome += currentPrice;

            console.log(`${name}: ${product} - ${currentPrice.toFixed(2)}`)
            
            data = pattern.exec(line);
        }

        index++;
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softuniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']

)