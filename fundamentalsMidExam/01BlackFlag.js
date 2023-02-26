function blackFlag(input) {

    let days = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let goal = Number(input.shift());

    let totalProfit = 0;

    for(let i = 1; i <= days; i++) {
        if(i % 3 === 0) {
            totalProfit += dailyPlunder + (dailyPlunder*0.5);
        } else {
            totalProfit += dailyPlunder;
        }

        if(i % 5 === 0) {
            totalProfit *= 0.7;
        }
    }

    if(totalProfit >= goal) {
        console.log(`Ahoy! ${totalProfit.toFixed(2)} plunder gained.`);
    } else {
        
        let percentage = (totalProfit / goal) * 100;

        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
"20",
"380"]);

