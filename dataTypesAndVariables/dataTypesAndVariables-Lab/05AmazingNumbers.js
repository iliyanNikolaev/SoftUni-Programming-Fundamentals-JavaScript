function amazingNumbers(num) {
    let numStr = num.toString();

    let numStrLength = numStr.length;

    let sum = 0;

    for (let i = 0; i < numStrLength; i++) {
        let currDiggit = Number(numStr[i]);

        sum += currDiggit;
    }

    let output = `${num} Amazing? `;

    let sumAsStr = sum.toString();

    sumAsStr.includes('9') ? output += 'True' : output += 'False';

    console.log(output);
}

amazingNumbers(1233);