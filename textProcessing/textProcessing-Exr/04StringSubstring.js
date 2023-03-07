function stringSubstring(searchedWord, text) {
    let arr = text.split(' ');

    let searchedWordLower = searchedWord.toLowerCase();
    let isFound = false

    for (const word of arr) {
        
        if(word.toLowerCase() === searchedWordLower){
            isFound = true;
            break;
        }
    }

    if(isFound) {
        console.log(searchedWord)
    } else {
        console.log(`${searchedWord} not found!`)
    }
}

stringSubstring('python',
'JavaScript is the best programming language')