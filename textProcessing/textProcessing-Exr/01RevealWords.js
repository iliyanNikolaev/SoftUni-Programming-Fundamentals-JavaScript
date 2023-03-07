function reveralWords(words, text) {

    let wordsArr = words.split(', ');

    wordsArr.forEach(word => {
        
        let match = '*'.repeat(word.length);

        text = text.replace(match, `${word}`);
    });

    console.log(text);
}

reveralWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);