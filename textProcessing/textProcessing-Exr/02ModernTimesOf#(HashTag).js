function findingHashtagWords(text) {

    let textArr = text.split(' ');

    let resultWords = [];

    textArr.forEach(word => {

        let wordIsSpecial = word.startsWith('#') && word.length > 1;
        let charIsNotDiggit = false;

        if (wordIsSpecial) {

            for (let i = 1; i < word.length; i++) {

                let char = word[i].toLowerCase();

                let charIsDigit = char.charCodeAt() >= 97 && char.charCodeAt() <= 122;

                if (!charIsDigit) {
                    charIsNotDiggit = true;
                    break;
                }
            }

            if (!charIsNotDiggit) {
                resultWords.push(word.slice(1));
            }
        }
    });

    console.log(resultWords.join('\n'))
}

findingHashtagWords('The symbol # is known #variously in English-speaking #regions as the #number sign');


function anotherVariant(text) {
    let textArr = text.split(' ');

    let resultWords = [];

    textArr.forEach(word => {

        let wordIsSpecial = word.startsWith('#') && word.length > 1;

        if (wordIsSpecial) {
            for (let i = 1; i < word.length; i++) {

                if (!isNaN(word[i])) {
                    break;
                }

                if (i === (word.length - 1)) {
                    resultWords.push(word.slice(1));
                }
            }
        }
    });

    console.log(resultWords.join('\n'));
}

anotherVariant('The symbol # is known #variously in English-speaking #regions as the #number sign');