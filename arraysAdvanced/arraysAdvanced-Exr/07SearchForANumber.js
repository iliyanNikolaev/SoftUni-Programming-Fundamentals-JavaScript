function searchForNum (array, params) {
    let countTakedNums = params[0];

    let countRemovedNums = params[1];

    let searchedNum = params[2];

    let modifiedArray = array.splice(0, countTakedNums);

    modifiedArray.splice(0, countRemovedNums);

    let counter = 0;

    for(num of modifiedArray) {
        if(num === searchedNum) {
            counter++;
        }
    }

    console.log(`Number ${searchedNum} occurs ${counter} times.`);
}

searchForNum([7, 1, 5, 8, 2, 7],
    [3, 1, 5]    
    );