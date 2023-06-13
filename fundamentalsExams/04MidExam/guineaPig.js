function solve(input) {
    let gramsFood = Number(input.shift()) * 1000;
    let gramsHay = Number(input.shift()) * 1000;
    let gramsCover = Number(input.shift()) * 1000;
    
    const gramsPetWeight = Number(input.shift()) * 1000;

    let isOver = false;

    for(let i = 1; i <= 30; i++) {
        gramsFood -= 300;

        if(i % 2 == 0) {
            gramsHay -= gramsFood * 0.05;
        }

        if(i % 3 == 0) {
            gramsCover -= gramsPetWeight / 3;
        }

        if(gramsFood <= 0 || gramsHay <= 0 || gramsCover <= 0) {
            isOver = true;
            break;
        }
    } 
    if(isOver){
        console.log('Merry must go to the pet store!');
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(gramsFood/1000).toFixed(2)}, Hay: ${(gramsHay/1000).toFixed(2)}, Cover: ${(gramsCover/1000).toFixed(2)}.`);
    }
}

solve((["10", 
"5", 
"5.2", 
"1"])
);