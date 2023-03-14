function mirrorWords(input) {

    let text = input[0];

    let pattern = /([#]|[@]){1}(?<firstword>[A-Za-z]{3,})\1{2}(?<secondword>[A-Za-z]{3,})\1{1}/g

    let matchesIterator = text.matchAll(pattern);

    let matchedPairsArr = []

    for (const match of matchesIterator) {

        let pair = [];

        pair.push(match.groups.firstword, match.groups.secondword);

        matchedPairsArr.push(pair);
    }

    let matchesCount = matchedPairsArr.length;

    let finalMatches = [];

    for (const pair of matchedPairsArr) {

        let firstWord = pair[0];
        let secondword = pair[1];
        let reversedSecondWord = '';

        for (let i = secondword.length - 1; i >= 0; i--) {
            reversedSecondWord += secondword[i];
        }


        if (firstWord === reversedSecondWord) {
            let element = `${firstWord} <=> ${secondword}`
            finalMatches.push(element);
        }
    }

    if (matchesCount === 0) {
        console.log('No word pairs found!')
    } else {
        console.log(`${matchesCount} word pairs found!`)
    }

    if (finalMatches.length === 0) {
        console.log('No mirror words!')
    } else {
        console.log('The mirror words are:')
        console.log(finalMatches.join(', '))
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]    
);