function nonDecreasingSubset(arr) {
    
    let currentMaxNum = Number.MIN_SAFE_INTEGER;
    
    let resultArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        
        let currNum = arr[i];

        if(currNum >= currentMaxNum) {
            
            resultArr.push(currNum);

            currentMaxNum = currNum;
        }
    }

    console.log(resultArr.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);