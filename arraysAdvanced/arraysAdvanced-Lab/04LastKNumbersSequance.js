function lastKNumberSequence(length, k) {
    
    let resultArray = [1];

    for(let i = 1; i < length; i++) {

        let sumElements = 0;

        let sequence = resultArray.slice(Math.max(resultArray.length - k, 0));

        for(el of sequence) {
            sumElements += el;
        }

        resultArray.push(sumElements);
    }

    console.log(resultArray.join(' '));
}

lastKNumberSequence(8, 2);