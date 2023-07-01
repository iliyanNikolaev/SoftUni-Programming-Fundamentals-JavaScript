function solve(input) {
    const cities = Number(input.shift());
    let totalProfit = 0;

    for (let i = 1; i <= cities; i++) {
        const cityName = input.shift();

        let profit = Number(input.shift());
        let expenses = Number(input.shift());

        if (i % 3 == 0 && i % 5 != 0) {
            expenses += expenses * 0.5;
        }

        if (i % 5 == 0) {
            profit *= 0.9;
        }

        profit -= expenses;

        totalProfit += profit;

        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

solve((["5",

"Lille",

"2226.00",

"1200.60",

"Rennes",

"6320.60",

"5460.20",

"Reims",

"600.20",

"452.32",

"Bordeaux",

"6925.30",

"2650.40",

"Montpellier",

"680.50",

"290.20"]))