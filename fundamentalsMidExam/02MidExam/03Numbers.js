function numbers(inputNums) {

    let inputNumsArr = inputNums.split(' ').map(num => Number(num));

    let sumOfNums = 0;

    for (const num of inputNumsArr) {
        
        sumOfNums += num;
    }

    let avg = sumOfNums / inputNumsArr.length;

    let resultArr = [];

    for (const num of inputNumsArr) {
        
        if(num > avg){
            resultArr.push(num);
        }
    }

    let sortedResultArr = resultArr.sort((a, b) => b-a);

    if(sortedResultArr.length === 0){
        console.log('No');
    } else if(sortedResultArr.length < 5){
        console.log(sortedResultArr.join(' '))
    } else {
        let result = '';
        
        for(let i = 0; i < 5; i++){
            result += `${sortedResultArr[i]} `;
        }

        console.log(result);
    }
    
}

numbers('-1 -2 -3 -4 -5 -6')