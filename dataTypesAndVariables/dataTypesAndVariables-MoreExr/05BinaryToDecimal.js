function binaryToDecimal(binaryNum) {
    let binaryNumStr = binaryNum.toString();

    let binaryNumStrLength = binaryNumStr.length - 1;

    let decimalNum = 0;
    
    for(let i = 0; i <= binaryNumStrLength; i++){

        let currentDiggit = Number(binaryNumStr[i]);

        decimalNum += (currentDiggit * Math.pow(2, binaryNumStrLength - i));
    }

    console.log(decimalNum); 
}

binaryToDecimal(00001001);