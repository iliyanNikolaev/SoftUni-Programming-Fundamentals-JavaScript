function distinctArray(numbers) {
    let copyNumbers = numbers.slice();

    let resultArr = [];

    for(num of copyNumbers) {
        if(!resultArr.includes(num)) {
            resultArr.push(num);
        }
    }

    console.log(resultArr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);