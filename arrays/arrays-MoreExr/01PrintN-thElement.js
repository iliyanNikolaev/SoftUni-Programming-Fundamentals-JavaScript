function printWithStepN(arr) {
    
    let step = Number(arr.pop());
    let result = [];

    for(let i = 0; i < arr.length; i += step){
        let element = arr[i];

        result.push(element);
    }

    console.log(result.join(' '));
}

printWithStepN(['1', '2', '3', '4', '5', '6']);