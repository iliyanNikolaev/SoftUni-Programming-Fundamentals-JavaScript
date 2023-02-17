function printAndSum(startNum, endNum){
    
    let result = [];
    
    let sum = 0;

    for (let i = startNum; i <= endNum; i++){

        result.push(i);

        sum += i;
    }

    console.log(result.join(' '));

    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);