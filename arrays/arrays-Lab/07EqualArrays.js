function equalArrays(firstArr, secondArr) {
    
    let sum = 0;
    let isDifferent = false;
    let diffIndex = 0;

    for (let i = 0; i < firstArr.length; i++) {

        let firstNum = Number(firstArr[i]);
        let secondNum = Number(secondArr[i]);

        if(firstNum === secondNum) {
            sum += firstNum;
        } else {
            isDifferent = true;
            diffIndex = i;
            break;
        }
    }

    let result = '';

    isDifferent ? result = `Arrays are not identical. Found difference at ${diffIndex} index` : result = `Arrays are identical. Sum: ${sum}`;

    console.log(result);
}

equalArrays(['1'], ['10']);