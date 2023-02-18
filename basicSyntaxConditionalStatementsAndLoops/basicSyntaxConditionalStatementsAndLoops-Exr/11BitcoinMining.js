function bitcoinMining(arr) {

    let bitcoinPrice = 11949.16;

    let goldPricePerGram = 67.51;

    let arrLength = arr.length;

    let totalMoney = 0;

    let buyedBitcoins = 0;

    let dayBuyingFirstBitcoin = 0;

    for (let i = 0; i < arrLength; i++) {

        let gramsGoldForCurrDay = Number(arr[i]);

        if ((i + 1) % 3 === 0) {
            gramsGoldForCurrDay *= 0.7;
        }

        let profitFromGold = gramsGoldForCurrDay * goldPricePerGram;

        totalMoney += profitFromGold;

        while (totalMoney >= bitcoinPrice) {

            totalMoney -= bitcoinPrice;
            buyedBitcoins++;

            if (buyedBitcoins === 1) {
                dayBuyingFirstBitcoin = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${buyedBitcoins}`);

    if (dayBuyingFirstBitcoin !== 0) {

        console.log(`Day of the first purchased bitcoin: ${dayBuyingFirstBitcoin}`)
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}

bitcoinMining([100, 200, 300]);