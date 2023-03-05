function oddOccurrences(words) {

    let wordsArr = words.split(' ').map(w => w.toLowerCase());

    let obj = {};

    for (const word of wordsArr) {
        
        obj[word] = 0;
    }

    for (const word of wordsArr) {
        
        if(obj.hasOwnProperty(word)){
            obj[word]++;
        }
    }
    
    
    let objEntries = Object.entries(obj).filter(en => en[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);

    let output = '';

    for (const entry of objEntries) {
        output += `${entry[0]} `;    
    }
    
    console.log(output);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');