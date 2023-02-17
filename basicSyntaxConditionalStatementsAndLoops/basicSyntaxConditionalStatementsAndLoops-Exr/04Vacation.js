function vacantion (peopleCount, typeGroup, dayOfWeek){
    
    let priceForDay = 0;

    switch(typeGroup){
        case 'Students':
            
            switch(dayOfWeek){
                case 'Friday': priceForDay = 8.45; break;
                case 'Saturday': priceForDay = 9.80; break;
                case 'Sunday': priceForDay = 10.46; break;
            } 

            break;
        case 'Business':
            
        switch(dayOfWeek){
            case 'Friday': priceForDay = 10.90; break;
            case 'Saturday': priceForDay = 15.60; break;
            case 'Sunday': priceForDay = 16; break;
        } 

            break;
        case 'Regular':
            
        switch(dayOfWeek){
            case 'Friday': priceForDay = 15; break;
            case 'Saturday': priceForDay = 20; break;
            case 'Sunday': priceForDay = 22.50; break;
        } 

            break;
    }

    let totalPrice = peopleCount * priceForDay;

    if (typeGroup === 'Students' && peopleCount >= 30) {
        totalPrice *= 0.85;
    }

    if (typeGroup === 'Business' && peopleCount >= 100) {
        totalPrice -= 10 * priceForDay;
    }

    if (typeGroup === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }
     
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacantion(40, "Regular", "Saturday")