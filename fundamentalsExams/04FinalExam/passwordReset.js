function solve(input) {
    
    let rawPass = input.shift();

    let currRow = input.shift().split(' ');

    while (currRow != 'Done') {

        const currCommand = currRow[0];

        let bufferStr = '';

        switch (currCommand) {
            case 'TakeOdd':

                for (let i = 0; i < rawPass.length; i++) {
                    if (i % 2 != 0) {
                        bufferStr += rawPass[i];
                    }
                }

                rawPass = bufferStr;
                console.log(rawPass);
                break;
            case 'Cut':
                const cutIndex = Number(currRow[1]);
                const cutCount = Number(currRow[2]);

                bufferStr = rawPass.slice(cutIndex, cutIndex + cutCount);

                rawPass = rawPass.replace(bufferStr, '');
                console.log(rawPass);
                break;
            case 'Substitute':
                const substring = currRow[1];
                const substitute = currRow[2];

                if (rawPass.includes(substring)) {
                    while(rawPass.includes(substring)){
                        rawPass = rawPass.replace(substring, substitute);
                    }

                    console.log(rawPass);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }

        currRow = input.shift().split(' ');
    }

    console.log(`Your password is: ${rawPass}`);
}

solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]);
