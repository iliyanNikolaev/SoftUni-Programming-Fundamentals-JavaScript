function magicMatrices(input) {
    let firstArr = input[0];
    let secondArr = input[1];
    let thirdArr = input[2];
    
    let firstRowSum = 0;
    let secondRowSum = 0;
    let thirdRowSum = 0;

    for(let i = 0; i < firstArr.length; i++) {
        let firstRowCurNum = firstArr[i];
        firstRowSum += firstRowCurNum;
        
        let secondRowCurrNum = secondArr[i];
        secondRowSum += secondRowCurrNum;

        let thirdRowCurrNum = thirdArr[i];
        thirdRowSum += thirdRowCurrNum;
    }

    if (firstRowSum !== secondRowSum || firstRowSum !== thirdRowSum || secondRowSum !== thirdRowSum) {
        return false;
    }

    let firstColSum = 0;
    let tempColSum = 0;

    for (let i = 0; i < firstArr.length; i++) {
        let firstColCurrNum = firstArr[i];
        let secondColCurrNum = secondArr[i];
        let thirdColCurrNum = thirdArr[i];

        if(i === 0) {
            firstColSum = firstColCurrNum + secondColCurrNum + thirdColCurrNum;
        } else {
            tempColSum = firstColCurrNum + secondColCurrNum + thirdColCurrNum;
        }
    }

    if(tempColSum !== firstColSum) {
        return false;
    }
    
    if(firstColSum !== firstRowSum){
        return false;
    }

    return true;
}

console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
   ));

