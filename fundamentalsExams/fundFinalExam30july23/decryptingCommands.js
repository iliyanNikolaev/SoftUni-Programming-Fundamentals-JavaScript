function solve(input) {
    let str = input.
        shift();

    let line = input.shift();
    while (line != 'Finish') {
        const tokens = line.split(' ');
        const action = tokens[0];

        switch (action) {
            case 'Replace':
                const currChar = tokens[1];
                const newChar = tokens[2];
                //Compatibility??
                while(str.includes(currChar)){
                    str = str.replace(currChar, newChar);
                }
                console.log(str)
                break;
            case 'Cut':
                const cutStartIndex = Number(tokens[1]);
                const cutEndIndex = Number(tokens[2]);

                if (cutStartIndex < 0 || cutEndIndex >= str.length) {
                    console.log('Invalid indices!')
                } else {
                    const strForCut = str.slice(cutStartIndex, cutEndIndex + 1);
                    str = str.replace(strForCut, '');
                    console.log(str);
                }
                break;
            case 'Make':
                const casing = tokens[1];
                if (casing == 'Upper') {
                    str = str.toUpperCase();
                } else {
                    str = str.toLowerCase();
                }
                console.log(str);
                break;
            case 'Check':
                const message = tokens[1];

                if (str.includes(message)) {
                    const cutStartIndex = Number(tokens[1]);
                    console.log(`Message contains ${message}`);
                } else {
                    console.log(`Message doesn\'t contain ${message}`);
                }
                break;
            case 'Sum':
                const sumStartIndex = Number(tokens[1]);
                const sumEndIndex = Number(tokens[2]);
                if (sumStartIndex < 0 || sumEndIndex >= str.length) {
                    console.log('Invalid indices!')
                } else {
                    const strForSum = str.slice(sumStartIndex, sumEndIndex + 1);
                    let sum = 0;
                    for (let i = 0; i < strForSum.length; i++) {
                        sum += strForSum[i].charCodeAt();
                    }
                    console.log(sum);
                }
                break;
        }
        line = input.shift();
    }
}

solve(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"])