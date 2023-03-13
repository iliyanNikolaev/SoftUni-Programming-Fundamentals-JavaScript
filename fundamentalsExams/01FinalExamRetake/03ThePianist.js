function thePianist(input) {

    let piecesObj = {};

    let countStartingPieces = Number(input.shift());

    for(let i = 1; i <= countStartingPieces; i++) {
        let lineArr = input.shift().split('|');

        let piece = lineArr[0];

        let composer = lineArr[1];

        let tone = lineArr[2];

        piecesObj[piece] = {
            composer: composer,
            tone: tone
        } // 'Clair de Lune': { compositor: 'Debussy', tone: 'C# Minor' }
    }

    let line = input.shift();

    while(line !== 'Stop') {

        let lineArr = line.split('|');

        let action = lineArr[0];
        let piece = lineArr[1];
        switch(action) {

            case 'Add':
                 
                if(piecesObj.hasOwnProperty(piece)){
                    console.log(`${piece} is already in the collection!`)
                } else {
                    
                    let addComposer = lineArr[2];
                    let addTone = lineArr[3];

                    piecesObj[piece] = {
                        composer: addComposer,
                        tone: addTone
                    }
                    console.log(`${piece} by ${addComposer} in ${addTone} added to the collection!`);
                }
                break;
            case 'Remove': 
                if(piecesObj.hasOwnProperty(piece)){
                    delete piecesObj[piece];

                    console.log(`Successfully removed ${piece}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
            case 'ChangeKey':
                if(piecesObj.hasOwnProperty(piece)){
                    let changingTone = lineArr[2];

                    piecesObj[piece].tone = changingTone;

                    console.log(`Changed the key of ${piece} to ${changingTone}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
        }
        

        line = input.shift();
    }

    for (const piece in piecesObj) {
        
        console.log(`${piece} -> Composer: ${piecesObj[piece].composer}, Key: ${piecesObj[piece].tone}`)
    }
}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]  
  )