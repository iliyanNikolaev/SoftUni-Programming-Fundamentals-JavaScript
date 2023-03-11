function furniture(input) {

    const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]*)!(?<qty>[0-9]+)/g;

    let totalPrice = 0;

    let index = 0;

    console.log('Bought furniture:');

    while (input[index] !== 'Purchase') {

        let productRow = input[index];
        let productData = pattern.exec(productRow);

        while (productData !== null) {
            console.log(productData.groups['name']);

            const productPrice = productData.groups['price'];

            const productQty = productData.groups['qty'];

            totalPrice += productPrice * productQty;

            productData = pattern.exec(productRow);
        }

        index++;
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
)