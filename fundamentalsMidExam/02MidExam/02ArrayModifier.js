function arrayModifier(input) {

    let numbersArr = input.shift().split(' ').map(num => Number(num));

    let line = input.shift();

    while(line !== 'end') {

        let lineArr = line.split(' ');

        let action = lineArr[0];

        let firstIndex = 0;
        let secondIndex = 0;

        switch(action) {
            case 'swap': 
                firstIndex = Number(lineArr[1]);
                secondIndex = Number(lineArr[2]);

                let elementOnFirstIndex = numbersArr[firstIndex];
                let elementOnSecondIndex = numbersArr[secondIndex];

                numbersArr[firstIndex] = elementOnSecondIndex;
                numbersArr[secondIndex] = elementOnFirstIndex;
                
                break;
            case 'multiply': 
                firstIndex = Number(lineArr[1]);
                secondIndex = Number(lineArr[2]);

                let firstNum = numbersArr[firstIndex];
                let secondNum = numbersArr[secondIndex];
                
                let product = firstNum * secondNum;

                numbersArr[firstIndex] = product;
            
                break;
            case 'decrease': 

                for(let i = 0; i < numbersArr.length; i++) {
                    let currElement = Number(numbersArr[i]);
                    currElement--;

                    numbersArr[i] = currElement;
                }
                break;
        }

        line = input.shift();
    }

    console.log(numbersArr.join(', '));
}   

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);