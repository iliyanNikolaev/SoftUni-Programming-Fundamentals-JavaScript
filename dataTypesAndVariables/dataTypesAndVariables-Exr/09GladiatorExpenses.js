function gladiatorExpenses(lostFights, helmedPrice, swordPrice, shieldPrice, armorPrice){

    let expences = 0;
    
    let helmedBrokenCount = 0;
    let helmedIsBroken = false;
    let swordBrokenCount = 0;
    let swordIsBroken = false;
    let shieldBrokenCount = 0;


    for(let i = 1; i <= lostFights; i++){
        
        helmedBrokenCount++;
        swordBrokenCount++;

        
        if(helmedBrokenCount === 2){
            helmedIsBroken = true; 
            expences += helmedPrice;
            helmedBrokenCount = 0;
        }

        if(swordBrokenCount === 3){
            swordIsBroken = true;
            expences += swordPrice;
            swordBrokenCount = 0;
        }

        if(helmedIsBroken && swordIsBroken){
            shieldBrokenCount++;
            expences += shieldPrice;
        }

        if(shieldBrokenCount === 2){
            expences += armorPrice;
            shieldBrokenCount = 0;
        }

        helmedIsBroken = false;
        swordIsBroken = false;
    }

    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);