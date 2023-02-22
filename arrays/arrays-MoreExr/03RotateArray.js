function rotateArray(arr) {
    let rotationsCount = Number(arr.pop());

    for(let i = 1; i <= rotationsCount; i++) {

        let element = arr.pop();

        arr.unshift(element);
    }

    console.log(arr.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);