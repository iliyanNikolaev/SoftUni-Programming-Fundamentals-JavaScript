function rounding(num, percision) {
    if (percision > 15) {
        percision = 15;
    }

    console.log(parseFloat(num.toFixed(percision)));
}

rounding(10.5, 3);