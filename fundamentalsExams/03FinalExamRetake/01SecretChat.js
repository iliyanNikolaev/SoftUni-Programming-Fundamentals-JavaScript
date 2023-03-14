function secretChat(input) {
    let message = input.shift();

    let line = input.shift();

    while (line !== 'Reveal') {

        let lineArr = line.split(':|:')

        let action = lineArr[0];

        switch (action) {
            case 'InsertSpace':

                let insertIndex = Number(lineArr[1]);

                message = insertStr(message, ' ', insertIndex);

                function insertStr(str, substr, index) {
                    return str.slice(0, index) + substr + str.slice(index)
                }
                break;
            case 'Reverse':
                
                let substring = lineArr[1];

                if(message.includes(substring)) {

                    message = message.replace(substring, '');
                    
                    let reversedSubstring = '';

                    for(let i = substring.length - 1; i >= 0; i--) {
                        reversedSubstring += `${substring[i]}`;
                    }

                    message += reversedSubstring;
                } else {
                    console.log('error');
                    line = input.shift();
                    continue;
                }
                break;
            case 'ChangeAll': 
                let changedSubstr = lineArr[1];
                let changingSubst = lineArr[2];

                while(message.includes(changedSubstr)){

                    message = message.replace(changedSubstr, changingSubst);
                }
                break;
        }

        line = input.shift();
        console.log(message);
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]  
);