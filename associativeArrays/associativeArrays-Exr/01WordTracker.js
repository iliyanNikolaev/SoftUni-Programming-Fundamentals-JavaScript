function wordTracker(wordsArray) {
    let searchedWords = wordsArray.shift().split(' ');

    let obj = {};

    for (const word of searchedWords) {
        obj[word] = 0;
    }

    for (const word of wordsArray) {
        
        if(obj.hasOwnProperty(word)){
            obj[word]++;
        }
    }

    let objEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (const entry of objEntries) {
        console.log(`${entry[0]} - ${entry[1]}`);        
    }
}

wordTracker([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 
'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 
'this', 'is', 'your', 'task'
]
)