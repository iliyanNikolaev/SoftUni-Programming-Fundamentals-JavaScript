function wordOccurences(words) {
    let obj = {};

    for (const word of words) {
        
        if(!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }

        obj[word]++;
    }

    let objEntries = Object.entries(obj);

    objEntries.sort((a,b) => b[1] - a[1]);

    for (const entry of objEntries) {
        
        console.log(`${entry[0]} -> ${entry[1]} times`)
    }
}

wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", 
"another", "sentence", "And", "finally", "the", "third", "sentence"])