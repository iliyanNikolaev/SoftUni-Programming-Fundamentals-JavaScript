function spiceMustFlow(startingQuantity){

    let totalQuantity = 0;

    let quantityForCurrentDay = startingQuantity;

    let daysCounter = 0;

    while(quantityForCurrentDay >= 100){
        daysCounter++;

        totalQuantity += quantityForCurrentDay - 26;

        quantityForCurrentDay-=10;
    }

    if(totalQuantity > 26){
        totalQuantity -= 26;
    }

    console.log(daysCounter);

    console.log(totalQuantity);

}

spiceMustFlow(450);