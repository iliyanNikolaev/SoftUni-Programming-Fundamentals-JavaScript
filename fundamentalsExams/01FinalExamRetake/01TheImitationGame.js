function imitation(input) {
    let message = input.shift();

    let command = input.shift();

    while (command !== 'Decode') {

        let commandArr = command.split('|')

        let action = commandArr[0];

        switch (action) {
            case 'Move':

                let countLettersToMove = Number(commandArr[1]);

                let cutedPart = message.slice(0, countLettersToMove);

                message = message.substring(countLettersToMove);

                message += cutedPart;

                break;

            case 'Insert':

                let insertIndex = Number(commandArr[1]);

                let letterToInsert = commandArr[2];

                message = insertStr(message, letterToInsert, insertIndex);

                function insertStr(str, substr, index) {
                    return str.slice(0, index) + substr + str.slice(index)
                }

                break;

            case 'ChangeAll':

                let textForReplace = commandArr[1];
                let replacerText = commandArr[2];

                let indexForReplace = message.indexOf(textForReplace);

                while (indexForReplace >= 0) {
                    message = message.replace(textForReplace, replacerText)

                    indexForReplace = message.indexOf(textForReplace);
                }

                break;
        }


        command = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

imitation(
    [
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode'
      ]
      
)