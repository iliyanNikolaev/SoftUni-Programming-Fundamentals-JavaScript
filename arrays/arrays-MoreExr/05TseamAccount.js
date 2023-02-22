function tseamAccount(input) {
    let index = 0;

    let startingGames = input[index].split(' ');
    index++;

    let command = input[index];
    index++;

    while (command !== 'Play!') {

        let commandArr = command.split(' ');
        let action = commandArr[0];
        let gameName = commandArr[1];

        switch (action) {
            case 'Install':

                if (!startingGames.includes(gameName)) {
                    startingGames.push(gameName);
                }

                break;
            case 'Uninstall':

                if (startingGames.includes(gameName)) {

                    let gameIndex = startingGames.indexOf(gameName);
                    startingGames.splice(gameIndex, 1);
                }

                break;
            case 'Update':
                if (startingGames.includes(gameName)) {

                    let gameIndex = startingGames.indexOf(gameName);
                    let updatedGame = startingGames.splice(gameIndex, 1);
                    startingGames.push(updatedGame);
                }

                break;
            case 'Expansion':

                let gameNameArr = gameName.split('-');

                gameName = gameNameArr[0];

                let expansion = gameNameArr[1];

                if (startingGames.includes(gameName)) {
                    
                    let newArr = [];
                    
                    for (let j = 0; j <= startingGames.length; j++) {
                        
                        let element = startingGames[j];

                        newArr.push(element);

                        if (element === gameName) {
                            newArr.push(`${gameName}:${expansion}`)
                        }
                    }

                    startingGames = newArr;
                }
                break;
        }

        command = input[index];
        index++;
    }

    console.log(startingGames.join(' '));
}

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);